import prisma from "@/utils/data/db";
import { ICreateScooterDTO } from "@/utils/dtos/Marken";
import { createScooterSchema } from "@/utils/validations/MarkenShema";
import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @param request GET
 * @returns ~/api/marken
 * @description Get All Marken
 * @access public
 */

export async function GET() {
try {
  const scooters = await prisma.scooter.findMany()
  return NextResponse.json(scooters, { status: 200 })

} catch (error) {
  
  return NextResponse.json({message:"Internal Server Error", error }, { status: 500 });
}


}


/**
 * 
 * @param request POST
 * @returns ~/api/marken
 * @description Create new Marke
 * @access public
 */

export async function POST(request: NextRequest) {
try {
  const body = (await request.json()) as ICreateScooterDTO;
  const validation = createScooterSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({
      message: validation.error.errors[0].message
    }, { status: 400 })
  }
  const scooter = await prisma.scooter.create({
    data: {
      brand: body.brand,
      model: body.model,
      description: body.description ?? "", //  Default empty string
      price: body.price,
      stock: body.stock ?? 0, //  Ensure stock is provided or default to 0
    },
  });
  console.log(scooter)
  return NextResponse.json({ scooter }, { status: 201 });
} catch (error) {

    return NextResponse.json({message:"Internal Server Error", error }, { status: 500 });

}

}