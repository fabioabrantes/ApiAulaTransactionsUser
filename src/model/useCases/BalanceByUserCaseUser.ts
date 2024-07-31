import {prisma} from '../../database/respository';

import { getBalance } from '../../utils/calcExtractor';

type Params = {
  id:string;
}

class BalanceByUserCaseUser{

  async execute({id}:Params):Promise<number>{

    const transactions = await prisma.transaction.findMany({
      where:{
        userId:id
      },
    });
    
    const extrato = getBalance(transactions);
    
    return extrato;
  }
}

export default new BalanceByUserCaseUser();