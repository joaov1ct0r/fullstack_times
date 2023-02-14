import request from "../api/config";
import ICreateTime from "../interfaces/ICreateTime";
import ITime from "../interfaces/ITime";
import useTime from "./useTime";

interface ISearchTimeReq {
  message: string,
  time: ITime
}

export default function useSearchTime({ nome }: ICreateTime) {
  const { setTime } = useTime()

  request.get<ISearchTimeReq>("/api/time/time", {
    data: {
      nome
    }
  }).then(response => setTime(response.data.time))
}