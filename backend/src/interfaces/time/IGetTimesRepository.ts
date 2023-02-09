import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface IGetTimesRepository {
  repository: PrismaClient;
  execute(): Promise<ITime[]>;
}
