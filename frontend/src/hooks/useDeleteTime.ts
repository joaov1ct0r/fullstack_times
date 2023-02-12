import { useEffect, useState } from "react";
import request from "../api/config";

interface IDeleteTimeReq {
  message: string,
}

export default function useDeleteTime(data: string) {
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    request.delete<IDeleteTimeReq>("/api/time/delete", {
      data: {
        id: data
      }
    }).then(response => setMessage(response.data.message))
  }, [])

  return message;
}