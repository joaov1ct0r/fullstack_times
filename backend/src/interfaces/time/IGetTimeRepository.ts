import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface IGetTimeRepository {
  execute(nome: string): Promise<ITime>;
}
