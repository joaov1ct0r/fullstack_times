import { PrismaClient } from "@prisma/client";
import ITime from "./ITime";

export default interface IEditTimeRepository {
  execute(id: number, nome: string): Promise<ITime>;
}
