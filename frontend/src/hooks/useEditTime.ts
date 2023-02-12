import { useEffect, useState } from "react";
import request from "../api/config";

interface IEditTimeReq {
  message: string,
}

interface IEditTimeProps {
  id: string,
  nome: string
}

export default function useEditTime({ id, nome }: IEditTimeProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    request.put<IEditTimeReq>("/api/time/edit", {
      nome,
      id
    }).then((response) => setMessage(response.data.message))
  }, [])

  return message;
}