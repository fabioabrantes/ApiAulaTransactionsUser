import { Transaction } from "../database/respository";

export function getBalance(statements: Transaction[]) {
  const balance = statements.reduce((acc, statement) =>
    statement.type.toLowerCase() === "credit" ? acc + statement.amount : acc - statement.amount, 0);
  return balance;
}