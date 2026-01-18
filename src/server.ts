import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router'; 
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import { healthCheckMiddleware } from './middlewares/health.middleware';
import logger from './config/logger.config';

const app = express();

// ============== MIDDLEWARE ==============
// Body parsing middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Correlation ID middleware
app.use(attachCorrelationIdMiddleware);

// ============== ROUTES ==============
// Health check endpoint
app.get('/health', healthCheckMiddleware);

// API routes
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

// ============== ERROR HANDLING ==============
// Custom error handler (must be before generic handler)
app.use(appErrorHandler);

// Generic error handler (must be last)
app.use(genericErrorHandler);

// ============== SERVER START ==============
const server = app.listen(serverConfig.PORT, () => {
  logger.info(`✅ Server is running at http://localhost:${serverConfig.PORT}`);
  logger.info(`📝 Environment: ${serverConfig.NODE_ENV}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});
