import { useEffect, useState } from "react";
import request from "../api/config";
import ICreateJogadorForm from "../interfaces/ICreateJogadorForm";
import IJogador from "../interfaces/IJogador";

interface ICreateJogadorReq {
  message: string,
  jogador: IJogador
}

export default function useCreateJogador(data: ICreateJogadorForm) {
  request.post<ICreateJogadorReq>("/api/jogador/create", {
    nome: data.nome,
    idade: data.idade,
    id: data.time_id
  })
}