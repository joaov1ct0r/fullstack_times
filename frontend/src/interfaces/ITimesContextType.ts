import IJogador from "./IJogador";
import ITime from "./ITime";

export default interface ITimesContextType {
    time: ITime;
    setTime: React.Dispatch<React.SetStateAction<ITime>>
    jogador: IJogador;
    setJogador: React.Dispatch<React.SetStateAction<IJogador>>
}