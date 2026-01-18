/**
 * HTTP Status Codes
 */
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SERVICE_UNAVAILABLE: 503,
} as const;

/**
 * API Response Messages
 */
export const RESPONSE_MESSAGES = {
    SUCCESS: "Success",
    INTERNAL_ERROR: "Internal Server Error",
    BAD_REQUEST: "Bad Request",
    NOT_FOUND: "Not Found",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    CONFLICT: "Conflict",
} as const;

/**
 * Headers
 */
export const HEADERS = {
    CORRELATION_ID: 'x-correlation-id',
    CONTENT_TYPE: 'content-type',
} as const;
