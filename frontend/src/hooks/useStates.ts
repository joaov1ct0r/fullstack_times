import { useContext } from "react";
import { TimesContext } from "../components/TimesContext";
import ITimesContextType from "../interfaces/ITimesContextType";

export default function useContextStates() {
    const {jogador, setJogador, setTime, time} = useContext(TimesContext) as ITimesContextType

    return { jogador, setJogador, setTime, time }
}