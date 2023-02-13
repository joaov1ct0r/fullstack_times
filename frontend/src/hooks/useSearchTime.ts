import { useEffect, useState } from "react";
import request from "../api/config";
import ICreateTime from "../interfaces/ICreateTime";
import ITime from "../interfaces/ITime";
import useTime from "./useTime";

interface ISearchTimeReq {
  message: string,
  time: ITime
}

export default function useSearchTime({ nome }: ICreateTime) {
  const [response, setResponse] = useState("");
  const { setTime } = useTime()

  useEffect(() => {
    request.get<ISearchTimeReq>("/api/time/time", {
      data: {
        nome
      }
    }).then(response => setTime(response.data.time))
  }, [])
}