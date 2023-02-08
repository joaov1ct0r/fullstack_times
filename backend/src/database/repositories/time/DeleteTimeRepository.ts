import ITime from "../../../interfaces/ITime";
import IDeleteTimeRepository from "../../../interfaces/time/IDeleteTimeRepository";
import prismaClient from "../../prismaClient";

export default class DeleteTimeRepository implements IDeleteTimeRepository {
  public readonly repository;

  constructor() {
    this.repository = prismaClient;
  }

  async execute(id: number) {
    const time = await this.repository.time.delete({
      where: { id },
    });

    return time;
  }
}
