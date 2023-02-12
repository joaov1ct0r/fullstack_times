import { useState } from "react";
import ITime from "../interfaces/ITime";

export default function useTime() {
  const [time, setTime] = useState<ITime>()

  return {time, setTime}
}