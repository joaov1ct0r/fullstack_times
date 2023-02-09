import IDeleteJogadorRepository from "../../../interfaces/jogador/IDeleteJogadorRepository";
import prismaClient from "../../prismaClient";

export default class DeleteJogadorRepository
  implements IDeleteJogadorRepository
{
  public readonly repository;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(id: number) {
    const jogador = await this.repository.jogador.delete({
      where: { id },
    });

    return jogador;
  }
}
