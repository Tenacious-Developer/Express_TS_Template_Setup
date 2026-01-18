import dotenv from 'dotenv';
import { validateEnv } from './env.validation';

// Load environment variables
dotenv.config();

// Validate and parse environment variables
const env = validateEnv();

/**
 * Server Configuration
 */
export const serverConfig = {
    PORT: env.PORT,
    NODE_ENV: env.NODE_ENV,
    isDevelopment: env.NODE_ENV === 'development',
    isProduction: env.NODE_ENV === 'production',
} as const;

export default serverConfig;

