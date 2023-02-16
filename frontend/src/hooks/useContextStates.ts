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
        searchTime
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
        searchTime
    }
}