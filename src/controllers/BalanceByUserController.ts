import {Request,Response} from 'express';
import BalanceByUserCaseUser from '../model/useCases/BalanceByUserCaseUser';

class BalanceByUserController {


  async handle(req:Request,res:Response):Promise<Response>{
    const {id} = req.user;
    
    const extrato = await BalanceByUserCaseUser.execute({id});

    
    return res.status(200).json({extrato});

  }
}

export default new BalanceByUserController();