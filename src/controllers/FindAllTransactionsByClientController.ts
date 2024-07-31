import { Request, Response } from 'express';
import FindAllTransactionByClientCaseUser from '../model/useCases/FindAllTransactionByClientCaseUser';

class FindAllTransactionsByClientController {


  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const transactions = await FindAllTransactionByClientCaseUser.execute({ id });

    return res.status(200).json({transactions});

  }
}

export default new FindAllTransactionsByClientController();