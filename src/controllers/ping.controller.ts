import { NextFunction, Request, Response } from "express";
import logger from "../config/logger.config";
import { HTTP_STATUS } from "../constants/http.constants";
import { ApiResponse } from "../types/api.types";

/**
 * Ping endpoint handler
 * Simple health check that echoes back a pong message
 */
export const pingHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("Ping request received");
        
        const response: ApiResponse = {
            success: true,
            message: "Pong!",
            statusCode: HTTP_STATUS.OK,
            data: {
                timestamp: new Date().toISOString(),
            }
        };

        res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
        next(error);
    }
};