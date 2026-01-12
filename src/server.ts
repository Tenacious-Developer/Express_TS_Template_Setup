import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router'; // Placeholder for future v2 routes 

const app = express();

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); // Placeholder for future v2 routes

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running at http://localhost:${serverConfig.PORT}`);
});