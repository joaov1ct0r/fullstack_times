import { useEffect, useState } from "react";
import request from "../api/config";
import ICreateTime from "../interfaces/ICreateTime";
import ITime from "../interfaces/ITime";

interface ICreateTimeReq {
  message: string,
  time: ITime
}

export default function useCreateTime(data: ICreateTime) {
  request.post<ICreateTimeReq>("/api/time/create", {
    nome: data.nome
  })
}