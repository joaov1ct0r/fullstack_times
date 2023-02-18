import IJogador from "../../interfaces/IJogador";
import IGetJogadorRepository from "../../interfaces/IGetJogadorRepository";
import prismaClient from "../prismaClient";

export default class GetJogadorRepository implements IGetJogadorRepository {
  execute(
    nome?: string | undefined,
    id?: number | undefined
  ): Promise<IJogador | null> {
    const jogador = id
      ? prismaClient.jogador.findFirst({
          where: { id },
        })
      : prismaClient.jogador.findFirst({
          where: { nome },
        });

    return jogador;
  }
}
