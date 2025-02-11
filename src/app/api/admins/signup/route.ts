// route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  prisma  from "@/utils/data/db";
import {  SignupDTO } from "@/utils/dtos/Admins";
import {SignUpValidationSchema } from "@/utils/validations/Admins";


/**
 * 
 * @param request POST
 * @returns ~/api/admins/signup
 * @description Create new admin
 * @access public
 */


// Signup Route
export async function POST(req: NextRequest) {
  try {
    const body: SignupDTO = await req.json();
    const parsedData = SignUpValidationSchema.parse(body);

    const existingUser = await prisma.admin.findUnique({
      where: { email: parsedData.email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    const newUser = await prisma.admin.create({
      data: {
        fullName: parsedData.fullName,
        email: parsedData.email,
        role: parsedData.role,
        password: hashedPassword, // Make sure to store hashed password
      },
    });

    return NextResponse.json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    return NextResponse.json({message:"Internal Server Error", error }, { status: 500 });
  }
}
