import { useEffect, useState } from "react";
import request from "../api/config";
import ITime from "../interfaces/ITime";

interface IGetTimesReq {
  message: string,
  times: ITime[]
}

export default function useGetTimes() {
  const [times, setTimes] = useState<ITime[]>();

  request.get<IGetTimesReq>("/api/time/times").then((response) => setTimes(response.data.times))
  
  return times;
}