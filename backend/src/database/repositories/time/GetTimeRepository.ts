import IGetTimeRepository from "../../../interfaces/time/IGetTimeRepository";
import prismaClient from "../../prismaClient";

export default class GetTimeRepository implements IGetTimeRepository {
  async execute(nome: string) {
    const time = await prismaClient.time.findFirst({
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
