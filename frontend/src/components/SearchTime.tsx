import React from "react";
import useContextStates from "../hooks/useContextStates";
import ICreateTime from "../interfaces/ICreateTime";

export default function SearchTime() {
  const { useFormTime, searchTime } = useContextStates();

  const { handleSubmit, register, reset } = useFormTime();
  return (
    <form className="d-flex" role="search" onSubmit={() => handleSubmit((data: ICreateTime) => {
      searchTime(data);
      reset()
    })}>
      <input {...register("nome", {
        required: {
          value: true,
          message: "Nome é obrigatorio",
        },
        pattern: {
          value: /[a-z][A-Z]{1,45}$/gi,
          message: "Nome invalido",
        },
      })} className="form-control me-2" type="search" placeholder="Busque um time:" aria-label="Search" required />

      <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  )
}