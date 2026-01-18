import { z } from 'zod';

/**
 * Environment variables schema validation
 */
const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().int().positive().default(3000),
});

type EnvVars = z.infer<typeof envSchema>;

/**
 * Validate and load environment variables
 */
export const validateEnv = (): EnvVars => {
    try {
        const env = envSchema.parse(process.env);
        return env;
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            console.error('❌ Environment validation failed:');
            error.issues.forEach((issue: any) => {
                console.error(`   ${issue.path.join('.')}: ${issue.message}`);
            });
        }
        throw new Error('Invalid environment variables');
    }
};

export type { EnvVars };
