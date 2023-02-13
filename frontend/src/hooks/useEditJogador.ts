import { useEffect, useState } from "react";
import request from "../api/config";
import IEditJogadorForm from "../interfaces/IEditJogadorForm";

export default function useEditJogador(data: IEditJogadorForm) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    request.put("/api/jogador/edit", {
      id: data.id,
      nome: data.nome,
      idade: data.idade,
      time_id: data.time_id
    }).then(response => {
      if (response.status === 200 || response.status === 204) {
        setMessage("Success")
      } else {
        setMessage("Falha")
      }
    })
  }, [])

  return message
}