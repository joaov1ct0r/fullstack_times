import { PrismaClient } from "@prisma/client";

export default interface IEditTimeRepository {
  repository: PrismaClient;
  execute(id: number, nome: string): Promise<null>;
}
