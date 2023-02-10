import prismaClient from "../../prismaClient";
import IGetTimesRepository from "../../../interfaces/time/IGetTimesRepository";

export default class GetTimesRepository implements IGetTimesRepository {
  async execute() {
    const times = await prismaClient.time.findMany({
      include: {
        Jogador: true,
      },
    });

    return times;
  }
}
