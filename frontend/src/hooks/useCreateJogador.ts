import { useEffect, useState } from "react";
import request from "../api/config";
import ICreateJogadorForm from "../interfaces/ICreateJogadorForm";
import IJogador from "../interfaces/IJogador";

interface ICreateJogadorReq {
  message: string,
  jogador: IJogador
}

export default function useCreateJogador(data: ICreateJogadorForm) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    request.post<ICreateJogadorReq>("/api/jogador/create", {
      nome: data.nome,
      idade: data.idade,
      id: data.time_id
    }).then(response => {
      if (response.status === 200 || response.status === 204) {
        setMessage("Success")
      } else {
        setMessage("Falha")
      }
    })
  }, [])

  return message;
}