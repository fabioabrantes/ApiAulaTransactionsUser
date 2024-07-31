import { Router } from "express";

import { routesUser } from "./clients.routes";
import { routesTransactions } from "./transactions.routes";



const routes = Router();

routes.use(routesUser);
routes.use(routesTransactions);

export { routes };