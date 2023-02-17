import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import ICreateTime from "./ICreateTime";
import IEditTimeForm from "./IEditTimeForm";
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
    useFormTime(): {
        register: UseFormRegister<ICreateTime>
        handleSubmit: UseFormHandleSubmit<ICreateTime>
        reset: UseFormReset<ICreateTime>
        errors: FieldErrors<ICreateTime>
    }
    useFormEditTime(): {
        register: UseFormRegister<IEditTimeForm>
        handleSubmit: UseFormHandleSubmit<IEditTimeForm>
        reset: UseFormReset<IEditTimeForm>
        errors: FieldErrors<IEditTimeForm>
    }
}