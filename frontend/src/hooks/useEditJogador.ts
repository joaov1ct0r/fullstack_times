import { useEffect, useState } from "react";
import request from "../api/config";
import IEditJogadorForm from "../interfaces/IEditJogadorForm";

export default function useEditJogador(data: IEditJogadorForm) {
  request.put("/api/jogador/edit", {
    id: data.id,
    nome: data.nome,
    idade: data.idade,
    time_id: data.time_id
  })
}