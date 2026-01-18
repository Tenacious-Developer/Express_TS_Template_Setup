/**
 * Generic API Response wrapper
 */
export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    statusCode: number;
    data?: T;
    error?: {
        code?: string;
        details?: any;
    };
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

/**
 * Request context with correlation ID
 */
export interface RequestContext {
    correlationId: string;
    userId?: string;
    timestamp: Date;
}
