import IEditJogadorRepository from "../../interfaces/IEditJogadorRepository";
import prismaClient from "../prismaClient";

export default class EditJogadorRepository implements IEditJogadorRepository {
  async execute(id: number, nome: string, idade: number) {
    const jogador = await prismaClient.jogador.update({
      where: { id },
      data: {
        nome,
        idade
      },
    });

    return jogador;
  }
}
