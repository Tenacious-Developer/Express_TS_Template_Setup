import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import logger from "../config/logger.config";
import { HTTP_STATUS, RESPONSE_MESSAGES } from "../constants/http.constants";
import { ApiResponse } from "../types/api.types";

/**
 * Validates request body against provided Zod schema
 * @param schema - Zod schema to validate the request body
 * @returns - Express middleware function
 */
export const validateRequestBody = (schema: z.ZodTypeAny) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info("Validating request body");
            await schema.parseAsync(req.body);
            logger.info("Request body is valid");
            next();

        } catch (error) {
            logger.error("Request body validation failed", { error });
            
            const response: ApiResponse = {
                success: false,
                message: RESPONSE_MESSAGES.BAD_REQUEST,
                statusCode: HTTP_STATUS.BAD_REQUEST,
                error: {
                    code: 'VALIDATION_ERROR',
                    details: error instanceof z.ZodError ? error.issues : error,
                }
            };

            res.status(HTTP_STATUS.BAD_REQUEST).json(response);
        }
    };
};

/**
 * Validates query parameters against provided Zod schema
 * @param schema - Zod schema to validate the query parameters
 * @returns - Express middleware function
 */
export const validateQueryParams = (schema: z.ZodTypeAny) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info("Validating query parameters");
            await schema.parseAsync(req.query);
            logger.info("Query parameters are valid");
            next();

        } catch (error) {
            logger.error("Query parameter validation failed", { error });

            const response: ApiResponse = {
                success: false,
                message: RESPONSE_MESSAGES.BAD_REQUEST,
                statusCode: HTTP_STATUS.BAD_REQUEST,
                error: {
                    code: 'VALIDATION_ERROR',
                    details: error instanceof z.ZodError ? error.issues : error,
                }
            };

            res.status(HTTP_STATUS.BAD_REQUEST).json(response);
        }
    };
};