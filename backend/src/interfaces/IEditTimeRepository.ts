import { PrismaClient } from "@prisma/client";
import ITime from "./ITime";

export default interface IEditTimeRepository {
  repository: PrismaClient;
  execute(id: number, nome: string): Promise<ITime>;
}
