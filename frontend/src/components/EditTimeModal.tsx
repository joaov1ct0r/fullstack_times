import useEditTime from "../hooks/useEditTime";
import useFormEditTime from "../hooks/useFormEditTime";
import ICreateTime from "../interfaces/ICreateTime";
import IEditTimeForm from "../interfaces/IEditTimeForm";

export default function EditTimeModal() {
  const { handleSubmit, register, reset } = useFormEditTime();

  return (
    <div
      className="modal fade"
      id="editTimeModal"
      tabIndex={-1}
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
              const response = useEditTime(data);

              alert(response);

              reset();
            })}
          >

            <div className="input-group mb-3">
              <input
                {...register("id", {
                  required: {
                    value: true,
                    message: "ID é obrigatorio",
                  },
                  pattern: {
                    value: /[0-9]{1,9}$/,
                    message: "ID Invalido",
                  },
                })}
                type="number"
                placeholder="ID:"
                className="form-control"
                required
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
              Criar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}