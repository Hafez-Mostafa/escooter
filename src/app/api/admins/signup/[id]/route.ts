import { IdValidationSchema, UpdateAdminValidationSchema } from "@/utils/validations/Admins";
import  prisma  from "@/utils/data/db";
import { NextRequest, NextResponse } from "next/server";
import { UpdateAdminDto } from "@/utils/dtos/Admins";

/**
 * 
 * @param request GET
 * @returns ~/api/admins/signup
 * @description Get admin by ID
 * @access public
 */


// as Query
// export async function GET(request: NextRequest): Promise<NextResponse> {
//const id = request.nextUrl.searchParams.get('id');
//{{domain}}/api/admins/signup/?id=f7cadddc-0fc3-4939-8565-765867650d14 <---- example

export async function GET(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
    try {
      const { id } = params;
  
      if (!id) {
        return NextResponse.json({ error: "Missing admin ID in query parameters" }, { status: 400 });
      }
  
      // Validate 'id'
      const validation = IdValidationSchema.safeParse({ id });
      if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
      }
  
      // Fetch admin from database
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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.json({ error: "Missing admin ID in query parameters" }, { status: 400 });
          }
      
      const body = await request.json() as UpdateAdminDto;
      const validation = UpdateAdminValidationSchema.safeParse(body);
  
      if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
      }
  
      const existingAdmin = await prisma.admin.findUnique({ where: { id } });
      if (!existingAdmin) {
        return NextResponse.json({ error: "Admin not found" }, { status: 404 });
      }
  
      const updatedAdmin = await prisma.admin.update({
        where: { id },
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

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.json({ error: "Missing admin ID in query parameters" }, { status: 400 });
          }
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

