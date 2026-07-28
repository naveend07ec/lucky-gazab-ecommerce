import { Router, Request, Response } from 'express';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: GROUND_TRUTH_DATA.businessName,
    environment: process.env.NODE_ENV || 'development'
  });
});

export const healthRouter = router;
