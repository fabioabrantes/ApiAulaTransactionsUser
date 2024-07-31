import { prisma } from "../../database/respository";

type Params = {
  type: string;
  amount: number;
  title: string
  id: string;
}

class RegisterTransactions {


  async execute({ type, title, amount, id }: Params) {
    
    //validação dos campus capf e name

    ///validação verificando se o amount >0 já está cadastrrado
    if (amount <= 0) {
      return { status: 400, message: 'Amount must be greater than 0' };
    }

    // faça um codigo aqui paraverificar se o tipo é debit e se for verificar 
    //se tem saldo suficiente para realizar essa transação


    const transactions = await prisma.transaction.create({
      data: {
        type,
        amount,
        title,
        user: {
          connect: {
            id
          }
        }
      }
    })


    return { transactions }




  }
}

export default new RegisterTransactions();