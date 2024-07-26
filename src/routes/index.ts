import { Router } from "express";

import RegisterUserController from '../controllers/regiterUserController';
import RegisterTransactionsController from '../controllers/registerTransactionsController';
import FindAllUsersController from '../controllers/findAllUsersController';
import DeleteUserController from '../controllers/deleteUserConntroller';
import UpdatedUserController from '../controllers/UpdatedUserController';


//middlewares
import { verifyIfExistsAccountCPF } from "../middlewares/verifyCpf";
import { verifyIfExistsAccountById } from "../middlewares/verifyIfExistsAccountByID";



const routes = Router();

routes.post('/users', RegisterUserController.handle);
routes.get('/users', FindAllUsersController.handle);
routes.put('/users/:id',verifyIfExistsAccountById, UpdatedUserController.handle);

routes.delete('/users', verifyIfExistsAccountCPF, DeleteUserController.handle);
routes.post('/transactions', verifyIfExistsAccountCPF, RegisterTransactionsController.handle);

export { routes };