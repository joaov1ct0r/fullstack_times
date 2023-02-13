import { useEffect, useState } from "react";
import request from "../api/config";

export default function useDeleteJogador(id: string) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    request.delete("/api/jogador/delete", {
      data: {
        id
      }
    }).then(response => {
      if (response.status === 204 || response.status === 200) {
        setMessage("Sucesso!")
      } else {
        setMessage("Falha")
      }
    })
  }, [])

  return message;
}