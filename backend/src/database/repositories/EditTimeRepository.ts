import IEditTimeRepository from "../../interfaces/IEditTimeRepository";
import prismaClient from "../prismaClient";

export default class EditTimeRepository implements IEditTimeRepository {
  async execute(id: number, nome: string) {
    const time = await prismaClient.time.update({
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
