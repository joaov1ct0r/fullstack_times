import IJogador from "./IJogador";

export default interface ITime {
  id: number;
  nome: string;
  Jogador?: IJogador[];
}
