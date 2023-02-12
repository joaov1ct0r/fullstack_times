import { useForm } from "react-hook-form";
import ICreateTime from "../interfaces/ICreateTime";
import IEditTimeForm from "../interfaces/IEditTimeForm";

export default function useFormEditTime() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditTimeForm>({
    defaultValues: {
    nome: "",
    id: "",
    },
  });

  return { register, handleSubmit, reset, errors };
}
