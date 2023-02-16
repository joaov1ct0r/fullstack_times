import React, { createContext, useEffect, useState } from "react";
import request from "../api/config";
import ICreateTime from "../interfaces/ICreateTime";
import ICreateTimeReq from "../interfaces/ICreateTimeReq";
import IDeleteTimeReq from "../interfaces/IDeleteTimeReq";
import IEditTimeProps from "../interfaces/IEditTimeProps";
import IGetTimesReq from "../interfaces/IGetTimesReq";
import IJogador from "../interfaces/IJogador";
import ISearchTimeReq from "../interfaces/ISearchTimeReq";
import ITime from "../interfaces/ITime";
import ITimesContextType from "../interfaces/ITimesContextType";

export const TimesContext = createContext<ITimesContextType | unknown>({});

interface ITimesContextProps {
    children: JSX.Element[] | JSX.Element;
}

export function TimesProvider(props: ITimesContextProps) {
    const [time, setTime] = useState<ITime>();

    const [jogador, setJogador] = useState<IJogador>();

    const [times, setTimes] = useState<ITime[]>();

    const [shouldFetch, setShouldFetch] = useState(true);

    useEffect(() => {
      request.get<IGetTimesReq>("/api/time/times").then((response) => {
        setTimes(response.data.times)
        setShouldFetch(false)
      })
    }, [shouldFetch])

    function createTime(data: ICreateTime) {
      request.post<ICreateTimeReq>("/api/time/create", {
        nome: data.nome
      }).then(() => setShouldFetch(true))
    }

    function editTime({ id, nome }: IEditTimeProps) {
      request.put("/api/time/edit", {
        nome,
        id
      }).then(() => setShouldFetch(true))
    }

    function deleteTime(data: string) {
      request.delete<IDeleteTimeReq>("/api/time/delete", {
        data: {
          id: data
        }
      })
    }

    function searchTime({ nome }: ICreateTime) {
      request.get<ISearchTimeReq>("/api/time/time", {
        data: {
          nome
        }
      }).then(response => setTime(response.data.time))
    }
    
    return (
        <TimesContext.Provider value={
          { 
            time, 
            setTime, 
            jogador, 
            setJogador, 
            times, 
            setTimes, 
            setShouldFetch, 
            shouldFetch,
            createTime,
            editTime,
            deleteTime,
            searchTime
          }
          }>
          {props.children}
        </TimesContext.Provider>
      );
}