import ITime from "./ITime";

export default interface IJogador {
  id: number;
  nome: string;
  idade: number;
  time?: ITime[];
  time_id: number;
}
