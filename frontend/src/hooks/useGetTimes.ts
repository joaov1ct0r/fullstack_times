import { useState } from "react";
import request from "../api/config";
import ITime from "../interfaces/ITime";

export default async function useGetTimes() {
  const [times, setTimes] = useState<null | ITime[]>(null);

  const response = await request.get<ITime[]>("/api/time/times");

  setTimes(response.data);
  
  return times;
}