import { NextFunction, Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { asyncLocalStorage } from '../utils/helpers/request.helper';
import { HEADERS } from '../constants/http.constants';

/**
 * Middleware to attach correlation ID to each request
 * Used for request tracing and logging
 */
export const attachCorrelationIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Generate a unique correlation ID
    const correlationId = nanoid();
    
    // Attach to request headers
    req.headers[HEADERS.CORRELATION_ID] = correlationId;

    // Store in async local storage for use in logs
    asyncLocalStorage.run({ correlationId }, () => {
        next();
    });
};