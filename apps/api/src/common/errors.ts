export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details: any[] = []
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details: any[] = []) {
    super(400, 'VALIDATION_ERROR', message, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(404, 'NOT_FOUND', message);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Authentication required') {
    super(401, 'UNAUTHORIZED', message);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Insufficient permissions') {
    super(403, 'FORBIDDEN', message);
  }
}

export class InsufficientStockError extends AppError {
  constructor(message = 'Insufficient stock available for requested item') {
    super(422, 'INSUFFICIENT_STOCK', message);
  }
}

export class CouponInvalidError extends AppError {
  constructor(message = 'Coupon code is invalid or expired') {
    super(422, 'COUPON_INVALID', message);
  }
}
