import { z } from "zod";

// Schema for POST request body
export const pingPostSchema = z.object({
    message: z.string().min(1, "Message must not be empty").optional()
});

// Schema for GET query params
export const pingQuerySchema = z.object({
    name: z.string().min(1, "Name must not be empty").optional(),
    delay: z.string().transform(val => parseInt(val)).pipe(z.number().int().positive()).optional()
});