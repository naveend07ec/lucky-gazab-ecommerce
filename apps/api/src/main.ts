import express from 'express';
import cors from 'cors';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { authRouter } from './controllers/auth.controller';
import { catalogRouter } from './controllers/catalog.controller';
import { checkoutRouter } from './controllers/checkout.controller';
import { orderRouter } from './controllers/order.controller';
import { adminRouter } from './controllers/admin.controller';
import { cmsBlogController } from './controllers/cms-blog.controller';
import { healthRouter } from './controllers/health.controller';
import { errorHandler } from './common/middleware';

const app = express();
const PORT = process.env.PORT || 4000;

// Security & Production Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check
app.use('/health', healthRouter);

// API v1 Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/catalog', catalogRouter);
app.use('/api/v1/checkout', checkoutRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/cms', cmsBlogController);

// Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 ${GROUND_TRUTH_DATA.businessName} API Server running on port ${PORT}`);
});

export default app;
