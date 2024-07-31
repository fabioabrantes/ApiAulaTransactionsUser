import { prisma } from '../../database/respository';


type Params = {
  id: string;
}

class DeleteUser {


  async execute({ id }: Params) {

    //validação dos campus capf e name

    ///validação verificando se o amount >0 já está cadastrrado
    await prisma.user.delete({
      where: {
        id
      }
    })


    return { message: "usuario deletado" }
  }

}

export default new DeleteUser();