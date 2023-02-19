import IJogador from "../../interfaces/IJogador";
import IGetJogadorRepository from "../../interfaces/IGetJogadorRepository";
import prismaClient from "../prismaClient";

export default class GetJogadorRepository implements IGetJogadorRepository {
  async execute(
    nome?: string | undefined,
    id?: number | undefined
  ): Promise<IJogador | null> {
    const jogador = id
      ? await prismaClient.jogador.findUnique({
          where: { id },
        })
      : await prismaClient.jogador.findFirst({
          where: { nome },
        });

    // let jogador;

    // if (id) {
    //   jogador = await prismaClient.jogador.find
    // }

    return jogador;
  }
}
