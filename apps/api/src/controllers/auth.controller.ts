import { Router, Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';
import { authMiddleware, AuthenticatedRequest } from '../common/middleware';

const router = Router();

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const emailOrPhone = req.body.emailOrPhone || req.body.email;
    const password = req.body.password;
    const result = await AuthService.login(emailOrPhone, password);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, password } = req.body;
    const result = await AuthService.register({ name, email, phone, password });
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.post('/forgot-password', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const emailOrPhone = req.body.emailOrPhone || req.body.email;
    const result = await AuthService.forgotPassword(emailOrPhone);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.post('/reset-password', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { resetToken, newPassword } = req.body;
    const result = await AuthService.resetPassword(resetToken, newPassword);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.post('/logout', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Logged out successfully' });
});

router.get('/me', authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
  res.json({ success: true, data: req.user });
});

export const authRouter = router;
