import {Router} from 'express';

import RegisterUserController from '../controllers/regiterUserController';
import FindAllUsersController from '../controllers/findAllUsersController';
import DeleteUserController from '../controllers/deleteUserConntroller';
import UpdatedUserController from '../controllers/UpdatedUserController';

// midleware
import { verifyIfExistsAccountCPF } from "../middlewares/verifyCpf";
import { verifyIfExistsAccountById } from "../middlewares/verifyIfExistsAccountByID";

const routesUser = Router();

routesUser.post('/users', RegisterUserController.handle);
routesUser.get('/users', FindAllUsersController.handle);
routesUser.put('/users/:id',verifyIfExistsAccountById, UpdatedUserController.handle);

routesUser.delete('/users', verifyIfExistsAccountCPF, DeleteUserController.handle);

export {routesUser}