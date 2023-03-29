import { PrismaClient } from "@prisma/client";
import IEditTimeRepository from "../../interfaces/IEditTimeRepository";
import prismaClient from "../prismaClient";

export default class EditTimeRepository implements IEditTimeRepository {
  private readonly prismaClient: PrismaClient;
  
  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(id: number, nome: string) {
    const time = await this.prismaClient.time.update({
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
