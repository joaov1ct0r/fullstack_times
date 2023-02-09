import IEditJogadorRepository from "../../../interfaces/jogador/IEditJogadorRepository";
import prismaClient from "../../prismaClient";

export default class EditJogadorRepository implements IEditJogadorRepository {
  public readonly repository;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(id: number, nome: string, idade: number, time_id: number) {
    const jogador = await this.repository.jogador.update({
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
