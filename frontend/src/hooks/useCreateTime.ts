import { useEffect, useState } from "react";
import request from "../api/config";
import ICreateTime from "../interfaces/ICreateTime";
import ITime from "../interfaces/ITime";

interface ICreateTimeReq {
  message: string,
  time: ITime
}

export default function useCreateTime(data: ICreateTime) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    request.post<ICreateTimeReq>("/api/time/create", {
      nome: data.nome
    }).then((response) => setMessage(response.data.message))
  }, [])

  return message;
}