import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface ICreateTimeRepository {
  repository: PrismaClient;
  execute(nome: string): Promise<ITime>;
}
