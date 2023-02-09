import IGetTimeRepository from "../../../interfaces/time/IGetTimeRepository";
import prismaClient from "../../prismaClient";

export default class GetTimeRepository implements IGetTimeRepository {
  public readonly repository;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(nome: string) {
    const time = await this.repository.time.delete({
      where: {
        nome,
      },
      include: {
        Jogador: true,
      },
    });

    return time;
  }
}
