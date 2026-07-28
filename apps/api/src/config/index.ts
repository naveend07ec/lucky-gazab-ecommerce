import dotenv from 'dotenv';
import path from 'path';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'lucky_gazab_super_secret_jwt_key_2026_indore',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'lucky_gazab_refresh_secret_key_2026_indore',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '15m',
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  razorpayKeyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_lucky_gazab_mock_key',
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET || 'rzp_test_mock_secret_key_12345',
  groundTruth: GROUND_TRUTH_DATA
};
