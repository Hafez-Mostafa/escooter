// route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  prisma  from "@/utils/data/db";
import { SignupDTO } from "@/utils/dtos/Admins";
import { IdValidationSchema, SignUpValidationSchema, UpdateAdminValidationSchema } from "@/utils/validations/Admins";


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




/**
 * 
 * @param request GET
 * @returns ~/api/admins/signup
 * @description Get admin by ID
 * @access public
 */

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
      const { id } = await req.json();
      const validation = IdValidationSchema.safeParse({ id });
  
      if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
      }
  
      const admin = await prisma.admin.findUnique({ where: { id } });
  
      if (!admin) {
        return NextResponse.json({ error: "Admin not found" }, { status: 404 });
      }
  
      return NextResponse.json(admin);
    } catch (error) {
      console.error("Error fetching admin:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  

/**
 * 
 * @param request PUT
 * @returns ~/api/admins/signup
 * @description Update admin
 * @access public
 */

export async function PUT(req: NextRequest) {
    try {
      const body = await req.json();
      const validation = UpdateAdminValidationSchema.safeParse(body);
  
      if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
      }
  
      const existingAdmin = await prisma.admin.findUnique({ where: { id: body.id } });
      if (!existingAdmin) {
        return NextResponse.json({ error: "Admin not found" }, { status: 404 });
      }
  
      const updatedAdmin = await prisma.admin.update({
        where: { id: body.id },
        data: {
          fullName: body.fullName ?? existingAdmin.fullName,
          email: body.email ?? existingAdmin.email,
          role: body.role ?? existingAdmin.role,
        },
      });
  
      return NextResponse.json({ message: "Admin updated successfully", admin: updatedAdmin });
    } catch (error) {
      console.error("Error updating admin:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
  

/**
 * 
 * @param request DELETE
 * @returns ~/api/admins/signup
 * @description Delete admin
 * @access public
 */

export async function DELETE(req: NextRequest): Promise<NextResponse> {
    try {
      const { id } = await req.json();
      const validation = IdValidationSchema.safeParse({ id });
  
      if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
      }
  
      const existingAdmin = await prisma.admin.findUnique({ where: { id } });
      if (!existingAdmin) {
        return NextResponse.json({ error: "Admin not found" }, { status: 404 });
      }
  
      await prisma.admin.delete({ where: { id } });
  
      return NextResponse.json({ message: "Admin deleted successfully" });
    } catch (error) {
      console.error("Error deleting admin:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


//''''''''Später''''''''mit Authentication''''''''''''''''''''''''''


// export async function PATCH(req: NextRequest) {
//     try {
//       const body = await req.json();
//       const validation = UpdateAdminValidationSchema.safeParse(body);
  
//       if (!validation.success) {
//         return NextResponse.json({ error: validation.error.errors }, { status: 400 });
//       }
  
//       // Extract adminId from request headers
//       const adminId = req.headers.get("admin-id");
//       if (!adminId) {
//         return NextResponse.json({ error: "Admin ID is required in headers" }, { status: 401 });
//       }
  
//       // Check if admin exists
//       const existingAdmin = await prisma.admin.findUnique({ where: { id: adminId } });
//       if (!existingAdmin) {
//         return NextResponse.json({ error: "Admin not found" }, { status: 404 });
//       }
  
//       // Update admin in the database
//       const updatedAdmin = await prisma.admin.update({
//         where: { id: adminId },
//         data: {
//           fullName: body.fullName ?? existingAdmin.fullName,
//           email: body.email ?? existingAdmin.email,
//           role: body.role ?? existingAdmin.role,
//         },
//       });
  
//       return NextResponse.json({ message: "Admin updated successfully", admin: updatedAdmin }, { status: 200 });
//     } catch (error) {
//       console.error("Error updating admin:", error);
//       return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
//   }
  
//   export async function DELETE(req: NextRequest) {
//     try {
//       // Extract adminId from request headers
//       const adminId = req.headers.get("admin-id");
//       if (!adminId) {
//         return NextResponse.json({ error: "Admin ID is required in headers" }, { status: 401 });
//       }
  
//       // Check if admin exists
//       const existingAdmin = await prisma.admin.findUnique({ where: { id: adminId } });
//       if (!existingAdmin) {
//         return NextResponse.json({ error: "Admin not found" }, { status: 404 });
//       }
  
//       // Delete admin from the database
//       await prisma.admin.delete({ where: { id: adminId } });
  
//       return NextResponse.json({ message: "Admin deleted successfully" }, { status: 200 });
//     } catch (error) {
//       console.error("Error deleting admin:", error);
//       return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
//   }