import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface IGetTimeRepository {
  repository: PrismaClient;
  execute(nome: string): Promise<ITime>;
}
