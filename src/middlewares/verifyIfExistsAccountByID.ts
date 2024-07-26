import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

export async function verifyIfExistsAccountById(req: Request, resp: Response, next: NextFunction,) {
  const prisma = new PrismaClient();

  const { id } = req.params as { id: string };

  const ClientExists = await prisma.user.findUnique({
    where: {
      id
    }
  });

  if (!ClientExists) {
    return resp.status(400).json({ message: 'Error: not client exists' })
  }
  req.user = ClientExists;
  next();
}