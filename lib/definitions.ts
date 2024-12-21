import { z } from 'zod';

export const SignupFormSchema = z.object({
    username: z.string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).max(100),
    password: z.string().min(8, { message: 'Be at least 8 characters long' })
});