import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import { validateRequestBody, validateQueryParams } from '../../validators';
import { pingPostSchema, pingQuerySchema } from '../../validators/ping.validator';
import { asyncHandler } from '../../utils/helpers/async.handler';

const pingRouter = express.Router();

// GET endpoint with query parameter validation
pingRouter.get('/', 
    validateQueryParams(pingQuerySchema), 
    asyncHandler(pingHandler)
);

// POST endpoint with body validation
pingRouter.post('/', 
    validateRequestBody(pingPostSchema), 
    asyncHandler(pingHandler)
);

export default pingRouter;