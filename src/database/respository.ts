import {PrismaClient,Transaction,User} from '@prisma/client';

const prisma = new PrismaClient();

export {prisma,Transaction,User}