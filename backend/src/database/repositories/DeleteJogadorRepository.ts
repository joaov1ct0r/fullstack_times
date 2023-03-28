import { PrismaClient } from "@prisma/client";
import IDeleteJogadorRepository from "../../interfaces/IDeleteJogadorRepository";
import prismaClient from "../prismaClient";

export default class DeleteJogadorRepository
  implements IDeleteJogadorRepository
{
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(id: number) {
    const jogador = await this.prismaClient.jogador.delete({
      where: { id },
    });

    return jogador;
  }
}
