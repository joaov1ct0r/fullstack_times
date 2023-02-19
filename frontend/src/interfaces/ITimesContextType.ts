import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormReset } from "react-hook-form";
import ICreateJogadorForm from "./ICreateJogadorForm";
import ICreateTime from "./ICreateTime";
import IEditJogadorForm from "./IEditJogadorForm";
import IEditTimeForm from "./IEditTimeForm";
import IEditTimeProps from "./IEditTimeProps";
import IError from "./IError";
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
    createJogador(data: ICreateJogadorForm): void
    useFormCreateJogador(): {
        register: UseFormRegister<ICreateJogadorForm>;
        handleSubmit: UseFormHandleSubmit<ICreateJogadorForm>;
        reset: UseFormReset<ICreateJogadorForm>;
        errors: FieldErrors<ICreateJogadorForm>;
    }
    editJogador(data: IEditJogadorForm): void
    useFormEditJogador(): {
        register: UseFormRegister<IEditJogadorForm>;
        handleSubmit: UseFormHandleSubmit<IEditJogadorForm>;
        reset: UseFormReset<IEditJogadorForm>;
        errors: FieldErrors<IEditJogadorForm>;
    }
    deleteJogador(id: string): void
    errorHandler: IError | undefined
    setErrorHandler: React.Dispatch<React.SetStateAction<IError | undefined>>
}