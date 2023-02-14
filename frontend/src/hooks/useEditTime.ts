import { useEffect, useState } from "react";
import request from "../api/config";

interface IEditTimeProps {
  id: string,
  nome: string
}

export default function useEditTime({ id, nome }: IEditTimeProps) {
  request.put("/api/time/edit", {
    nome,
    id
  })
}