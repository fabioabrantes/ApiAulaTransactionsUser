import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

export async function verifyIfExistsAccountCPF(req: Request, resp: Response, next: NextFunction,) {
  const prisma = new PrismaClient();

  const { cpf } = req.headers as { cpf: string };

  const ClientExists = await prisma.user.findUnique({
    where: {
      cpf
    }
  });

  if (!ClientExists) {
    return resp.status(400).json({ message: 'Error: not client exists' })
  }
  req.user = ClientExists;
  next();
}