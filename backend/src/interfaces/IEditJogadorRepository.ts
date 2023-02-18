import { PrismaClient } from "@prisma/client";
import IJogador from "./IJogador";

export default interface IEditJogadorRepository {
  execute(
    id: number,
    nome: string,
    idade: number,
  ): Promise<IJogador>;
}
