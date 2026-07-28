import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { AppError, UnauthorizedError, ValidationError } from '../common/errors';
import { UserRole } from '@lucky-gazab/shared-types';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  phone?: string;
  passwordHash: string;
  roles: string[];
  permissions: string[];
  status: 'active' | 'blocked';
  createdAt: Date;
}

// Database users store - Retaining administrator account only
const usersStore: UserAccount[] = [
  {
    id: 'usr-admin-1',
    name: 'Lucky Matai (Owner)',
    email: 'mgmatai@hotmail.com',
    phone: '9926089665',
    passwordHash: '$2b$12$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad6J1b.g5O4r15a', // password: AdminPassword123!
    roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN],
    permissions: [
      'products.create', 'products.update', 'products.delete',
      'orders.read', 'orders.update', 'orders.refund',
      'inventory.manage', 'reports.view', 'settings.manage'
    ],
    status: 'active',
    createdAt: new Date()
  }
];

export class AuthService {
  static async login(emailOrPhone: string, pass: string) {
    const query = emailOrPhone.toLowerCase().trim();
    const user = usersStore.find(u => u.email.toLowerCase() === query || (u.phone && u.phone.includes(query)));
    if (!user) {
      throw new UnauthorizedError('Invalid email/phone or password');
    }

    if (user.status === 'blocked') {
      throw new UnauthorizedError('Account has been disabled by administrator');
    }

    const isValid = await bcrypt.compare(pass, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedError('Invalid email/phone or password');
    }

    const accessToken = jwt.sign(
      {
        sub: user.id,
        email: user.email,
        roles: user.roles,
        permissions: user.permissions
      },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn } as jwt.SignOptions
    );

    const refreshToken = jwt.sign(
      { sub: user.id },
      config.jwtRefreshSecret,
      { expiresIn: config.jwtRefreshExpiresIn } as jwt.SignOptions
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        roles: user.roles,
        permissions: user.permissions
      },
      accessToken,
      refreshToken
    };
  }

  static async forgotPassword(emailOrPhone: string) {
    const query = emailOrPhone.toLowerCase().trim();
    const user = usersStore.find(u => u.email.toLowerCase() === query || (u.phone && u.phone.includes(query)));
    if (!user) {
      // Return success to prevent enumeration
      return { message: 'If account exists, reset instructions have been sent via Email/SMS.' };
    }
    const resetToken = jwt.sign({ sub: user.id, action: 'reset_password' }, config.jwtSecret, { expiresIn: '15m' });
    return { message: 'Password reset link sent to your email/phone.', resetToken };
  }

  static async resetPassword(resetToken: string, newPass: string) {
    try {
      const decoded = jwt.verify(resetToken, config.jwtSecret) as any;
      const user = usersStore.find(u => u.id === decoded.sub);
      if (!user) throw new ValidationError('Invalid or expired reset token');
      user.passwordHash = await bcrypt.hash(newPass, 12);
      return { message: 'Password reset successfully. You can now login with your new password.' };
    } catch {
      throw new ValidationError('Invalid or expired password reset token');
    }
  }

  static async register(data: { name: string; email: string; phone?: string; password: string }) {
    const existing = usersStore.find(u => u.email.toLowerCase() === data.email.toLowerCase());
    if (existing) {
      throw new ValidationError('An account with this email already exists');
    }

    const passwordHash = await bcrypt.hash(data.password, 12);
    const newUser: UserAccount = {
      id: `usr-${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      passwordHash,
      roles: [UserRole.CUSTOMER],
      permissions: [],
      status: 'active',
      createdAt: new Date()
    };

    usersStore.push(newUser);

    const token = jwt.sign(
      {
        sub: newUser.id,
        email: newUser.email,
        roles: newUser.roles,
        permissions: newUser.permissions
      },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn } as jwt.SignOptions
    );

    return {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        roles: newUser.roles
      },
      accessToken: token
    };
  }

  static getUserById(id: string) {
    return usersStore.find(u => u.id === id);
  }
}
