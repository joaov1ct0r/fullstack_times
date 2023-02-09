import { PrismaClient } from "@prisma/client";
import IJogador from "../IJogador";

export default interface IDeleteJogadorRepository {
  repository: PrismaClient;
  execute(id: number): Promise<IJogador>;
}
