import { Request, Response } from "express";
import UpdatedUserUC from "../model/useCases/UpdatedUserUC";

class UpdatedUserController {
  async handle(req: Request, res: Response) {
    const {cpf, name} = req.body;
    const { id } = req.user;

    const result = await UpdatedUserUC.execute({ id,cpf,name });


    return res.status(200).json(result);

  }
}

export default new UpdatedUserController();
