import { useEffect, useState } from "react";
import request from "../api/config";

interface IEditTimeProps {
  id: string,
  nome: string
}

export default function useEditTime({ id, nome }: IEditTimeProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    request.put("/api/time/edit", {
      nome,
      id
    }).then((response) => {
      if (response.status === 204 || response.status === 200) {
        setMessage("Sucesso!")
      } else {
        setMessage("Falha")
      }
    })
  }, [])

  return message;
}