// route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import  prisma  from "@/utils/data/db";
import { SigninDTO } from "@/utils/dtos/Admins";
import { SignInValidationSchema } from "@/utils/validations/Admins";

const SECRET_KEY = process.env.JWT_SECRET || 'escooter';



// Signin Route
export async function POST(req: NextRequest) {
  try {
    const body: SigninDTO = await req.json();
    const parsedData = SignInValidationSchema.parse(body);

    const user = await prisma.admin.findUnique({
      where: { email: parsedData.email },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(parsedData.password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return NextResponse.json({ message: "Signin successful", token });
  } catch (error) {
    return NextResponse.json({message:"Internal Server Error", error }, { status: 500 });
  }
}


// Get all admins
export async function GET() {
    const admins = await prisma.admin.findMany();
    return NextResponse.json(admins);
  }
  