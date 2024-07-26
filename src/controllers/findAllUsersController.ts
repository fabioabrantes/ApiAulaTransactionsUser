import { Request, Response } from "express";
import findAllUsersUC from "../model/useCases/findAllUsers";

class FindAllUsersController {
  async handle(req: Request, res: Response) {
      
    const result = await findAllUsersUC.execute();

      return res.status(200).json({ result });
    
  }
}

export default new FindAllUsersController();
