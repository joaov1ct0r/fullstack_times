import { useEffect, useState } from "react";
import request from "../api/config";

export default function useDeleteJogador(id: string) {
  request.delete("/api/jogador/delete", {
    data: {
      id
    }
  })
}