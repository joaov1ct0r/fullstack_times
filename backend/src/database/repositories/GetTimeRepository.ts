import { PrismaClient } from "@prisma/client";
import IGetTimeRepository from "../../interfaces/IGetTimeRepository";
import prismaClient from "../prismaClient";

export default class GetTimeRepository implements IGetTimeRepository {
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(nome?: string, id?: number) {
    const time = id
      ? await this.prismaClient.time.findFirst({
          where: { id },
          include: {
            Jogador: true,
          },
        })
      : await this.prismaClient.time.findFirst({
          where: { nome },
          include: {
            Jogador: true,
          },
        });

    return time;
  }
}
