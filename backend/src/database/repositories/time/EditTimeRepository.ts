import IEditTimeRepository from "../../../interfaces/time/IEditTimeRepository";
import prismaClient from "../../prismaClient";

export default class EditTimeRepository implements IEditTimeRepository {
  public readonly repository;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(id: number, nome: string) {
    const time = await this.repository.time.update({
      data: {
        nome,
      },
      where: {
        id,
      },
    });

    return time;
  }
}
