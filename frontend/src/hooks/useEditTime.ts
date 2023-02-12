import { useEffect, useState } from "react";
import request from "../api/config";
import ICreateTime from "../interfaces/ICreateTime";

interface IEditTimeReq {
  message: string,
}

export default function useEditTime(data: ICreateTime) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    request.put<IEditTimeReq>("/api/time/edit", {
      nome: data.nome
    }).then((response) => setMessage(response.data.message))
  }, [])

  return message;
}