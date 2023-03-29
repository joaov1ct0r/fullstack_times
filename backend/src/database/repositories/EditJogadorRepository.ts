import { PrismaClient } from "@prisma/client";
import IEditJogadorRepository from "../../interfaces/IEditJogadorRepository";
import prismaClient from "../prismaClient";

export default class EditJogadorRepository implements IEditJogadorRepository {
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(id: number, nome: string, idade: number) {
    const jogador = await this.prismaClient.jogador.update({
      where: { id },
      data: {
        nome,
        idade
      },
    });

    return jogador;
  }
}
