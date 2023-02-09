import IEditJogadorRepository from "../../../interfaces/jogador/IEditJogadorRepository";
import prismaClient from "../../prismaClient";

export default class EditJogadorRepository implements IEditJogadorRepository {
  async execute(id: number, nome: string, idade: number, time_id: number) {
    const jogador = await prismaClient.jogador.update({
      data: {
        nome,
        idade,
        time_id,
      },
      where: { id },
    });

    return jogador;
  }
}
