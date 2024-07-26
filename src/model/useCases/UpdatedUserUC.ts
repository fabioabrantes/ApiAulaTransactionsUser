import { PrismaClient, } from "@prisma/client";

type Params = {
  id: string;
  name:string;
  cpf:string;
}

class UpdatedUserUC {


  async execute({ id,name,cpf }: Params) {
    const prisma = new PrismaClient();

    //validação dos campus capf e name

    ///validação verificando se o amount >0 já está cadastrrado
    const userUpdated = await prisma.user.update({
      where: {
        id
      },
      data:{
        name,
        cpf
      }
    })


    return { userUpdated }
  }

}

export default new UpdatedUserUC();