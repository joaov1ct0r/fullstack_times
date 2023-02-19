import { useContext } from "react";
import { TimesContext } from "../components/TimesContext";
import ITimesContextType from "../interfaces/ITimesContextType";

export default function useContextStates() {
    const {
        jogador,
        setJogador,
        setTime,
        time, 
        setTimes, 
        times,
        setShouldFetch,
        shouldFetch,
        createTime,
        editTime,
        deleteTime,
        searchTime,
        useFormTime,
        useFormEditTime,
        createJogador,
        useFormCreateJogador,
        editJogador,
        useFormEditJogador,
        deleteJogador,
        error,
        setError
    } = useContext(TimesContext) as ITimesContextType

    return {
        jogador,
        setJogador,
        setTime,
        time, 
        setTimes, 
        times,
        setShouldFetch,
        shouldFetch,
        createTime,
        editTime,
        deleteTime,
        searchTime,
        useFormTime,
        useFormEditTime,
        createJogador,
        useFormCreateJogador,
        editJogador,
        useFormEditJogador,
        deleteJogador,
        error,
        setError
    }
}