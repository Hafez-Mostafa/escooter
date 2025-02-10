// validation.ts
import { z } from 'zod';

export const SignUpValidationSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  role: z.enum(['ADMIN', 'MODERATOR']), // Adjust roles as needed
});

export const SignInValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const UpdateAdminValidationSchema = z.object({
    id: z.string().uuid("Invalid ID format").optional(),
  fullName: z.string().min(3, 'Full name must be at least 3 characters long').optional(),
  email: z.string().email('Invalid email address').optional(),
  role: z.enum(['ADMIN', 'MODERATOR']).optional(), // Adjust roles as needed
});

export const IdValidationSchema = z.object({
    id: z.string().uuid("Invalid ID format"),
  });
  