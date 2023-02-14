import React, { createContext, useState } from "react";
import IJogador from "../interfaces/IJogador";
import ITime from "../interfaces/ITime";

interface ITimesContextType {
    time: ITime;
    setTime: React.Dispatch<React.SetStateAction<ITime>>
    jogador: IJogador;
    setJogador: React.Dispatch<React.SetStateAction<IJogador>>
}

export const TimesContext = createContext<ITimesContextType | unknown>({});

interface ITimesContextProps {
    children: JSX.Element[] | JSX.Element;
}

export function TimesProvider(props: ITimesContextProps) {
    const [time, setTime] = useState<ITime>();

    const [jogador, setJogador] = useState<IJogador>();
    
    return (
        <TimesContext.Provider value={{ time, setTime, jogador, setJogador }}>
          {props.children}
        </TimesContext.Provider>
      );
}