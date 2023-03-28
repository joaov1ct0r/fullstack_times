import { PrismaClient } from "@prisma/client";
import ICreateTimeRepository from "../../interfaces/ICreateTimeRepository";
import prismaClient from "../prismaClient";

export default class CreateTimeRepository implements ICreateTimeRepository {
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(nome: string) {
    const time = await this.prismaClient.time.create({
      data: {
        nome,
      },
    });

    return time;
  }
}
