import { useForm } from "react-hook-form";
import ICreateTime from "../interfaces/ICreateTime";

export default function useFormTime() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateTime>({
    defaultValues: {
    nome: "",
    },
  });

  return { register, handleSubmit, reset, errors };
}
