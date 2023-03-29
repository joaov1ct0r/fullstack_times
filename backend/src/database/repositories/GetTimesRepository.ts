import prismaClient from "../prismaClient";
import IGetTimesRepository from "../../interfaces/IGetTimesRepository";
import { PrismaClient } from "@prisma/client";

export default class GetTimesRepository implements IGetTimesRepository {
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute() {
    const times = await this.prismaClient.time.findMany({
      include: {
        Jogador: true,
      },
    });

    return times;
  }
}
