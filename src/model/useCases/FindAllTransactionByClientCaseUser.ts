import { prisma, Transaction } from '../../database/respository';

type Params = {
  id: string;
}

class FindAllTransactionByClientCaseUser {

  async execute({ id }: Params): Promise<Transaction[]> {

    const transactions = await prisma.transaction.findMany({
      where: {
        userId: id,
      },
    });

    return transactions;
  }
}

export default new FindAllTransactionByClientCaseUser();