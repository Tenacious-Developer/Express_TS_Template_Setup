import { Request, Response } from 'express';

export const pingHandler = (req:Request, res:Response) => {
    console.log('JSON Request received at /ping', req.body);
    console.log('QueryParam Request received at /ping', req.query);
    res.send('Pong Hello, TypeScript with Express!');
}