import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { Shop } from '$prisma/client'

const prisma = new PrismaClient()

export const getShops = depend(
  { prisma: prisma as { shop: { findMany(): Promise<Shop[]> } } },
  async ({ prisma }, limit?: number) =>
    (await prisma.shop.findMany()).slice(0, limit)
)
