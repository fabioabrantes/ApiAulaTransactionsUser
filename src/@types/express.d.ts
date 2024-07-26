type Client = {
  cpf:string;
  name:string;
  id:string;
}

declare namespace Express{
  export interface Request{
    user:Client;
  }
}