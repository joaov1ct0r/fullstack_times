import ICreateTimeRepository from "../../../interfaces/time/ICreateTimeRepository";
import ITime from "../../../interfaces/ITime";
import prismaClient from "../../prismaClient";

export default class CreateTimeRepository implements ICreateTimeRepository {
  public readonly repository;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(nome: string): Promise<ITime> {
    const time = await this.repository.time.create({
      data: {
        nome,
      },
    });

    return time;
  }
}
