import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

try {
  prisma = new PrismaClient();
} catch (e) {
  console.warn('[Prisma] Failed to instantiate PrismaClient, using fallback mode:', e);
  prisma = {} as any;
}

export { prisma };
