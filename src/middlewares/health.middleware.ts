import { Request, Response } from 'express';
import { HTTP_STATUS } from '../constants/http.constants';

/**
 * Health check endpoint middleware
 * Returns server health status and basic info
 */
export const healthCheckMiddleware = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({
        success: true,
        message: 'Server is healthy',
        status: 'UP',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
};
