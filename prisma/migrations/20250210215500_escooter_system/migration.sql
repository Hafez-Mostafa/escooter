/*
  Warnings:

  - The values [MANAGER,SUPPORT] on the enum `AdminRole` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AdminRole_new" AS ENUM ('ADMIN', 'MODERATOR', 'INVENTORY');
ALTER TABLE "Admin" ALTER COLUMN "role" TYPE "AdminRole_new" USING ("role"::text::"AdminRole_new");
ALTER TYPE "AdminRole" RENAME TO "AdminRole_old";
ALTER TYPE "AdminRole_new" RENAME TO "AdminRole";
DROP TYPE "AdminRole_old";
COMMIT;

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "password" TEXT NOT NULL;
