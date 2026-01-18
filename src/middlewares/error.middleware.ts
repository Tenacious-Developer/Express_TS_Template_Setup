import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";
import { HTTP_STATUS, RESPONSE_MESSAGES } from "../constants/http.constants";
import logger from "../config/logger.config";

/**
 * Application-specific error handler
 * Handles custom AppError instances
 */
export const appErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    
    logger.error({
        message: err.message,
        statusCode,
        stack: err.stack,
        url: req.url,
        method: req.method,
    });

    res.status(statusCode).json({
        success: false,
        message: err.message || RESPONSE_MESSAGES.INTERNAL_ERROR,
        statusCode,
        error: {
            code: err.name,
        },
    });
};

/**
 * Generic error handler for unexpected errors
 * Catches all unhandled errors
 */
export const genericErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error({
        message: err.message,
        statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
        stack: err.stack,
        url: req.url,
        method: req.method,
    });

    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: RESPONSE_MESSAGES.INTERNAL_ERROR,
        statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
        error: {
            code: 'INTERNAL_SERVER_ERROR',
        },
    });
};
