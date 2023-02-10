import { PrismaClient } from "@prisma/client";
import ITime from "./ITime";

export default interface IDeleteTimeRepository {
  execute(id: number): Promise<ITime>;
}
