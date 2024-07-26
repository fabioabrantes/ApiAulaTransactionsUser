import { Request, Response } from "express";
import DeleteUserUC from "../model/useCases/deleteUser";

class RegisterTransactionsController {
  async handle(req: Request, res: Response) {
    const { id } = req.user;

    const result = await DeleteUserUC.execute({ id });


    return res.status(200).json(result);

  }
}

export default new RegisterTransactionsController();
