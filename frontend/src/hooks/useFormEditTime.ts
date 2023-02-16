import { useForm } from "react-hook-form";
import IEditTimeForm from "../interfaces/IEditTimeForm";
import useContextStates from "./useContextStates";

export default function useFormEditTime() {
  const { time } = useContextStates();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditTimeForm>({
    defaultValues: {
    nome: "",
    id: String(time?.id),
    },
  });

  return { register, handleSubmit, reset, errors };
}
