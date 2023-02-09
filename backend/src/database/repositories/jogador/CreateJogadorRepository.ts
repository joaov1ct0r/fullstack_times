import ICreateJogadorRepository from "../../../interfaces/jogador/ICreateJogadorRepository";
import prismaClient from "../../prismaClient";

export default class CreateJogadorRepository
  implements ICreateJogadorRepository
{
  async execute(nome: string, idade: number, time_id: number) {
    const jogador = await prismaClient.jogador.create({
      data: {
        nome,
        idade,
        time_id,
      },
    });

    return jogador;
  }
}
