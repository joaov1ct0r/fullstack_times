import { PrismaClient } from "@prisma/client";
import IJogador from "./IJogador";

export default interface IDeleteJogadorRepository {
  execute(id: number): Promise<IJogador>;
}
