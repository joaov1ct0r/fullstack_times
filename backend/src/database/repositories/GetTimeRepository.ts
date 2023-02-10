import IGetTimeRepository from "../../interfaces/IGetTimeRepository";
import prismaClient from "../prismaClient";

export default class GetTimeRepository implements IGetTimeRepository {
  async execute(nome?: string, id?: number) {
    const time = id
      ? await prismaClient.time.findFirst({
          where: { id },
          include: {
            Jogador: true,
          },
        })
      : await prismaClient.time.findFirst({
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
