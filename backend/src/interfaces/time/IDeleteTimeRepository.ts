import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface IDeleteTimeRepository {
  repository: PrismaClient;
  execute(id: number): Promise<ITime>;
}
