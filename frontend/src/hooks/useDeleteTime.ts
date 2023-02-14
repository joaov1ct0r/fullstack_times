import request from "../api/config";

interface IDeleteTimeReq {
  message: string,
}

export default function useDeleteTime(data: string) {
  request.delete<IDeleteTimeReq>("/api/time/delete", {
    data: {
      id: data
    }
  })
}