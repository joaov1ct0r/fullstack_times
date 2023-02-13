import { useForm } from "react-hook-form";
import ICreateJogadorForm from "../interfaces/ICreateJogadorForm";
import useTime from "./useTime";

export default function useFormCreateJogador() {
  const { time } = useTime();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateJogadorForm>({
    defaultValues: {
    nome: "",
    idade: "",
    time_id: String(time?.id),
    },
  });

  return { register, handleSubmit, reset, errors };
}
