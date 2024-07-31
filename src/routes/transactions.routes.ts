import { Router } from 'express';

import RegisterTransactionsController from '../controllers/registerTransactionsController';

// midleware
import { verifyIfExistsAccountCPF } from "../middlewares/verifyCpf";
import { verifyIfExistsAccountById } from "../middlewares/verifyIfExistsAccountByID";
import FindAllTransactionsByClientController from '../controllers/FindAllTransactionsByClientController';
import BalanceByUserController from '../controllers/BalanceByUserController';

const routesTransactions = Router();

routesTransactions.post('/transactions', verifyIfExistsAccountCPF, RegisterTransactionsController.handle);
routesTransactions.get('/transactions/:id', verifyIfExistsAccountById, FindAllTransactionsByClientController.handle);

routesTransactions.get('/balance/:id', verifyIfExistsAccountById, BalanceByUserController.handle);

export { routesTransactions }