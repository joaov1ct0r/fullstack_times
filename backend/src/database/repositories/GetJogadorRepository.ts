import IJogador from "../../interfaces/IJogador";
import IGetJogadorRepository from "../../interfaces/IGetJogadorRepository";
import prismaClient from "../prismaClient";
import { PrismaClient } from "@prisma/client";

export default class GetJogadorRepository implements IGetJogadorRepository {
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(
    nome?: string | undefined,
    id?: number | undefined
  ): Promise<IJogador | null> {
    const jogador = id
      ? await this.prismaClient.jogador.findUnique({
          where: { id },
        })
      : await this.prismaClient.jogador.findFirst({
          where: { nome },
        });

    return jogador;
  }
}
