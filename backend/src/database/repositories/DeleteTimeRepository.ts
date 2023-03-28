import { PrismaClient } from "@prisma/client";
import IDeleteTimeRepository from "../../interfaces/IDeleteTimeRepository";
import prismaClient from "../prismaClient";

export default class DeleteTimeRepository implements IDeleteTimeRepository {
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  async execute(id: number) {
    const time = await this.prismaClient.time.delete({
      where: { id },
    });

    return time;
  }
}
