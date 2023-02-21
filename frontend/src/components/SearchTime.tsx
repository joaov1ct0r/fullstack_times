import React from "react";
import useContextStates from "../hooks/useContextStates";
import ICreateTime from "../interfaces/ICreateTime";

export default function SearchTime() {
  const { useFormTime, searchTime } = useContextStates();

  const { handleSubmit, register, reset, errors } = useFormTime();
  return (
    <form className="d-flex" onSubmit={handleSubmit((data: ICreateTime) => {
      searchTime(data);
      reset()
    })}>
      <div className="input-group mb-3">
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
        <br />
        <p className="text text-danger">{errors.nome?.message}</p>
      </div>
      <button className="btn btn-outline-success" type="submit" >Buscar</button>
    </form>
  )
}