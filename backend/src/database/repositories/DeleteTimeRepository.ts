import IDeleteTimeRepository from "../../../interfaces/time/IDeleteTimeRepository";
import prismaClient from "../../prismaClient";

export default class DeleteTimeRepository implements IDeleteTimeRepository {
  async execute(id: number) {
    const time = await prismaClient.time.delete({
      where: { id },
    });

    return time;
  }
}
