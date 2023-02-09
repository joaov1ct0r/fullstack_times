import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface IGetTimeRepository {
  execute(nome?: string, id?: number): Promise<ITime | null>;
}
