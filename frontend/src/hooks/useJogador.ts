import { useState } from "react";
import IJogador from "../interfaces/IJogador";

export default function useJogador() {
  const [jogador, setJogador] = useState<IJogador>()

  return {jogador, setJogador}
}