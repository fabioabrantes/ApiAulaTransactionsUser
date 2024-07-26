import { PrismaClient, } from "@prisma/client";


class FindAllUsers {


  async execute() {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany({
      select: {
        cpf: true,
        transactions: {
          select: {
            title: true,
            amount: true,
          }
        },

      }
    });
    return { users }
  }
}

export default new FindAllUsers();