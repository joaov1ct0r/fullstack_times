import { useForm } from "react-hook-form";
import IEditJogadorForm from "../interfaces/IEditJogadorForm";
import useJogador from "./useJogador";

export default function useFormEditJogador() {
  const { jogador } = useJogador();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditJogadorForm>({
    defaultValues: {
    nome: "",
    idade: "",
    time_id: String(jogador?.time_id),
    id: String(jogador?.id),
    },
  });

  return { register, handleSubmit, reset, errors };
}
