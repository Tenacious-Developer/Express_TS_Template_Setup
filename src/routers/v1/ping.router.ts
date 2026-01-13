import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import {  validateQueryParams } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';


const pingRouter = express.Router();

pingRouter.get('/', validateQueryParams(pingSchema), pingHandler);


pingRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default pingRouter;