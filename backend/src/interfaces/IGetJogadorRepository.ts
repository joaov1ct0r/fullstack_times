import IJogador from "./IJogador";

export default interface IGetJogadorRepository {
  execute(nome?: string, id?: number): Promise<IJogador | null>;
}
