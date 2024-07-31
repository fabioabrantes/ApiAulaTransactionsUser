import { prisma } from '../../database/respository';

class FindAllUsers {


  async execute() {

    const users = await prisma.user.findMany({
      select: {
        cpf: true,
        id:true,
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