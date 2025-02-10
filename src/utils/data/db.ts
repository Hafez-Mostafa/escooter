import { PrismaClient } from "@prisma/client";

// Extend the global object type to include `prisma`
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Function to create a new Prisma Client instance
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Use the existing Prisma instance if available, otherwise create a new one
const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma; // Store in global object in development mode
}

export default prisma;
