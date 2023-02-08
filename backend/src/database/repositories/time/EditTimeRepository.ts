import IEditTimeRepository from "../../../interfaces/time/IEditTimeRepository";
import ITime from "../../../interfaces/ITime";
import prismaClient from "../../prismaClient";

export default class EditTimeRepository implements IEditTimeRepository {
  public readonly repository;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(id: number, nome: string): Promise<ITime> {
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
