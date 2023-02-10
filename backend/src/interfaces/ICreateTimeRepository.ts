import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface ICreateTimeRepository {
  execute(nome: string): Promise<ITime>;
}
