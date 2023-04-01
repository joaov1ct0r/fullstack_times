import React, { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import request from "../api/config";
import ICreateJogadorForm from "../interfaces/ICreateJogadorForm";
import ICreateJogadorReq from "../interfaces/ICreateJogadorReq";
import ICreateTime from "../interfaces/ICreateTime";
import ICreateTimeReq from "../interfaces/ICreateTimeReq";
import IDeleteTimeReq from "../interfaces/IDeleteTimeReq";
import IEditJogadorForm from "../interfaces/IEditJogadorForm";
import IEditTimeForm from "../interfaces/IEditTimeForm";
import IEditTimeProps from "../interfaces/IEditTimeProps";
import IError from "../interfaces/IError";
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
    const [times, setTimes] = useState<ITime[]>();

    const [time, setTime] = useState<ITime>();

    const [shouldFetch, setShouldFetch] = useState(false);

    const [jogador, setJogador] = useState<IJogador>();

    const [shouldFetchTime, setShouldFetchTime] = useState(false);

    const [errorHandler, setErrorHandler] = useState<IError>()

    useEffect(() => {
      time ? searchTime({nome: String(time.nome)}) : null
    }, [shouldFetchTime])

    useEffect(() => {
      request.get<IGetTimesReq>("/api/time/times").then((response) => {
        setTimes(response.data.times)
      }).then (() => setShouldFetch(false))
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
    }, [shouldFetch])

    function createTime(data: ICreateTime) {
      request.post<ICreateTimeReq>("/api/time/create", {
        nome: data.nome
      }).then(() => setShouldFetch(true))
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
    }

    function editTime({ id, nome }: IEditTimeProps) {
      request.put("/api/time/edit", {
        nome,
        id
      }).then(() => setShouldFetch(true))
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
    }

    function deleteTime(data: string) {
      request.delete<IDeleteTimeReq>("/api/time/delete", {
        data: {
          id: data
        }
      }).then(() => setShouldFetch(true))
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
    }

    function searchTime({ nome }: ICreateTime) {
      request.post<ISearchTimeReq>(`/api/time/time/${nome}`).then(response => {
        setTime(response.data.time)
      })
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
    }

    function useFormTime() {
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<ICreateTime>({
        defaultValues: {
        nome: "",
        },
      });
    
      return { register, handleSubmit, reset, errors };
    }

    function useFormEditTime() {
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<IEditTimeForm>({
        defaultValues: {
        nome: "",
        id: String(time?.id),
        },
      });
    
      return { register, handleSubmit, reset, errors };
    }

    function createJogador(data: ICreateJogadorForm) {
      request.post<ICreateJogadorReq>("/api/jogador/create", {
        nome: data.nome,
        idade: data.idade,
        time_id: data.time_id
      }).then(() => setShouldFetch(true))
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
    }

    function useFormCreateJogador() {
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<ICreateJogadorForm>({
        defaultValues: {
        nome: "",
        idade: "",
        time_id: String(time?.id),
        },
      });
    
      return { register, handleSubmit, reset, errors };
    }

    function editJogador(data: IEditJogadorForm) {
      console.log(data)
      request.put("/api/jogador/edit", {
        id: data.id,
        nome: data.nome,
        idade: data.idade,
        time_id: data.time_id
      }).then(() => {
        setShouldFetch(true)
        setShouldFetchTime(true)
      })
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
    }

    function useFormEditJogador() {
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<IEditJogadorForm>({
        defaultValues: {
        nome: "",
        idade: "",
        time_id: String(jogador?.time_id),
        id: String(jogador?.id),
        },
      });
    
      return { register, handleSubmit, reset, errors };
    }

    function deleteJogador(id: string) {
      request.delete("/api/jogador/delete", {
        data: {
          id
        }
      }).then(() => {
        setShouldFetch(true)
        setShouldFetchTime(true)
      })
      .catch((error) => {
        if (error.response) setErrorHandler(error.response.data)
          else setErrorHandler({status: 500, message: error.message})
      })
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
            searchTime,
            useFormTime,
            useFormEditTime,
            createJogador,
            useFormCreateJogador,
            editJogador,
            useFormEditJogador,
            deleteJogador,
            errorHandler, 
            setErrorHandler
          }
          }>
          {props.children}
        </TimesContext.Provider>
      );
}
