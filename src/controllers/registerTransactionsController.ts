import { Request, Response } from "express";
import RegisterTransactions from "../model/useCases/registerTransactions";

class RegisterTransactionsController {
  async handle(req: Request, res: Response) {
    const { type, amount, title } = req.body;
    console.log(amount, type, title)
    const { id } = req.user;

    const result = await RegisterTransactions.execute({ type, title, amount, id });

    if (result.status !== 400) {
      return res.status(200).json({ result });
    } else {
      return res.status(result.status).json({ error: result.message });
    }
  }
}

export default new RegisterTransactionsController();
