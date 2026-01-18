import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Wrapper to handle async route handlers and catch errors
 * @param fn - Async route handler function
 * @returns Express middleware function
 */
export const asyncHandler = (fn: RequestHandler): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
