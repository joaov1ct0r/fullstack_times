import { PrismaClient } from "@prisma/client";
import ICreateJogadorRepository from "../../interfaces/ICreateJogadorRepository";
import prismaClient from "../prismaClient";

export default class CreateJogadorRepository
  implements ICreateJogadorRepository
{
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(nome: string, idade: number, time_id: number) {
    const jogador = await this.prismaClient.jogador.create({
      data: {
        nome,
        idade,
        time_id,
      },
    });

    return jogador;
  }
}
