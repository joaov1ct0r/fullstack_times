import { PrismaClient } from "@prisma/client";
import IJogador from "../IJogador";

export default interface ICreateJogadorRepository {
  repository: PrismaClient;
  execute(nome: string, idade: number): Promise<IJogador>;
}
