
import prisma from "@/utils/data/db";
import {   IUpdateScooterDTO } from "@/utils/dtos/Marken";
import { NextRequest, NextResponse } from "next/server";




interface Props {
  params: { id: string }
}

/**
 * 
 * @param request GET
 * @returns ~/api/marken/:id
 * @description Get Single Marke
 * @access public
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const scooter = await prisma.scooter.findUnique({where:{id:params.id}})
  if (!scooter) {
    return NextResponse.json({ message: 'Scooter not Found' }, { status: 404 })
  }

  return NextResponse.json(scooter, { status: 200 })
  } catch (error) {
    return NextResponse.json({message:"Internal Server Error", error }, { status: 500 });

  }

}

/**
 * 
 * @param request PUT
 * @returns ~/api/marken/:id
 * @description Update  Marke
 * @access public
 */

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } } // ✅ Explicitly define `params`
) { 
  try {
    const body = await request.json() as IUpdateScooterDTO;

    if (!params?.id) {
      return NextResponse.json({ message: "Invalid Scooter ID" }, { status: 400 });
    }

    const updatedScooter = await prisma.scooter.update({
      where: { id: params.id },  data: {
        brand: body.brand,
        model: body.model,
        price: body.price,
        stock: body.stock,
        description: body.description,
      },
    });
    return NextResponse.json({ message: "Marke Updated", updated: updatedScooter }, { status: 203 });

  } catch (error) {
    console.error("Error updating scooter:", error);
    return NextResponse.json({ message: "Error updating scooter" }, { status: 500 });
  }
}



/**
 * 
 * @param request DELETE
 * @returns ~/api/marken/:id
 * @description Delete Single Scooter
 * @access public
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const scooter = await prisma.scooter.findUnique({where:{id:params.id}})
  if (!scooter) {
    return NextResponse.json({ message: 'Scooter not Found' }, { status: 404 })
  }
  await prisma.scooter.delete({where:{id:params.id}})
 
  return NextResponse.json("Scooter Deleted Successfully", { status: 200 })
  } catch (error) {
    return NextResponse.json({message:"Internal Server Error", error }, { status: 500 });

  }

}