import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

// Declare global Prisma client
declare global {
  // Allow global `prisma` type
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
export const prisma = global.prisma || new PrismaClient();

// In development, attach to global object
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma; 