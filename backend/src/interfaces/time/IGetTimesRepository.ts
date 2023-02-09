import { PrismaClient } from "@prisma/client";
import ITime from "../ITime";

export default interface IGetTimesRepository {
  execute(): Promise<ITime[]>;
}
