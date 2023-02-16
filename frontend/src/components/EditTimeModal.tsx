import React from "react";
import useContextStates from "../hooks/useContextStates";
import useFormEditTime from "../hooks/useFormEditTime";
import IEditTimeForm from "../interfaces/IEditTimeForm";

export default function EditTimeModal() {
  const { handleSubmit, register, reset } = useFormEditTime();
  const { time, editTime } = useContextStates();

  return (
    <div
      className="modal fade"
      id="editTimeModal"
      tabIndex={-3}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edite o nome do seu time
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            className="modal-body"
            onSubmit={handleSubmit((data: IEditTimeForm) => {
              editTime(data)
              reset()
            })}
          >

            <div className="input-group mb-3">
              <input
                {...register("id", {
                  value: String(time?.id),
                })}
                type="number"
                placeholder={String(time?.id)}
                className="form-control"
                disabled
              ></input>
            </div>
            <span className="input-group-text mb-3" id="basic-addon2">
              Escolha o nome do seu time:
            </span>
            <div className="input-group mb-3">
              <input
                {...register("nome", {
                  required: {
                    value: true,
                    message: "Nome é obrigatorio",
                  },
                  pattern: {
                    value: /[a-z][A-Z]{1,45}$/gi,
                    message: "Nome invalido",
                  },
                })}
                type="text"
                placeholder="Nome:"
                className="form-control"
                required
              ></input>
            </div>

            <button
              type="button"
              className="btn btn-danger mx-2"
              data-bs-dismiss="modal"
              onClick={() => reset()}
            >
              Fechar
            </button>
            <button type="submit" className="btn btn-success">
              Editar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}