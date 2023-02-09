import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prismaClient";
import IGetTimesRepository from "../../../interfaces/time/IGetTimesRepository";

export default class GetTimesRepository implements IGetTimesRepository {
  public readonly repository: PrismaClient;

  constructor() {
    this.repository = prismaClient;
  }

  async execute() {
    const times = await this.repository.time.findMany();

    return times;
  }
}
