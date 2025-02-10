import {z} from 'zod'

export const createMarkeSchema = z.object({
        title: z.string().min(2).max(300),
        imageSrc: z.string().min(3).max(400),
        preis: z.number(),
        link: z.string().min(2).max(400),
    })



export const createScooterSchema = z.object({
  brand: z.string().min(2, "Brand name must be at least 2 characters long"),
  model: z.string().min(2, "Model name must be at least 2 characters long"),
  price: z.number().positive("Price must be a positive number"),
  stock: z.number().int().positive().optional(),
  batteryCapacity: z.number().optional(), // in Ah (optional)
  maxSpeed: z.number().optional(), // in km/h (optional)
  maxRange: z.number().optional(), // in km (optional)
  weight: z.number().optional(), // in kg (optional)
  description: z.string().optional().default(""), // ✅ Ensures it's never undefined
});
