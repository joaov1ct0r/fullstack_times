import { PrismaClient } from "@prisma/client";
import IJogador from "../IJogador";

export default interface IEditJogadorRepository {
  repository: PrismaClient;
  execute(
    id: number,
    nome: string,
    idade: number,
    time_id: number
  ): Promise<IJogador>;
}
