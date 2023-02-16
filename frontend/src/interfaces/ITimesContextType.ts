import ICreateTime from "./ICreateTime";
import IEditTimeProps from "./IEditTimeProps";
import IJogador from "./IJogador";
import ITime from "./ITime";

export default interface ITimesContextType {
    time: ITime;
    setTime: React.Dispatch<React.SetStateAction<ITime>>
    jogador: IJogador;
    setJogador: React.Dispatch<React.SetStateAction<IJogador>>
    times: ITime[]
    setTimes: React.Dispatch<React.SetStateAction<ITime[]>>
    shouldFetch: boolean
    setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>
    createTime(data: ICreateTime): void
    editTime({ id, nome }: IEditTimeProps): void
    deleteTime(data: string): void
    searchTime({ nome }: ICreateTime): void
}