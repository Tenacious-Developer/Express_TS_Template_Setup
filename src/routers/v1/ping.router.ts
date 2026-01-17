import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import { validateRequestBody, validateQueryParams } from '../../validators';
import { pingPostSchema, pingQuerySchema } from '../../validators/ping.validator';

const pingRouter = express.Router();

// GET endpoint with query parameter validation
pingRouter.get('/', validateQueryParams(pingQuerySchema), pingHandler);

// POST endpoint with body validation
pingRouter.post('/', validateRequestBody(pingPostSchema), pingHandler);

pingRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default pingRouter;