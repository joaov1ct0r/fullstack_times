import React from "react";
import { FiTrash, FiEdit } from "react-icons/fi";
import useDeleteTime from "../hooks/useDeleteTime";
import useGetTimes from "../hooks/useGetTimes";
import ITime from "../interfaces/ITime";

export default function List() {
  const times = useGetTimes();

  return (
    <table className="table bg-white w-75 mt-3 border border-dark">
      <thead className="text-center">
        <tr>
          <th scope="col">Time ID</th>
          <th scope="col">Time Nome</th>
          <th scope="col">Nº Jogadores</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {times?.map((time: ITime) => {

          return (<tr
            className="text-center text-danger"
            key={String(time.id)}
            id={String(time.id)}
          >
            <td>
              {time.id}
            </td>
            <td>{time.nome}</td>
            <td>{time.jogador.length}</td>
            <td>
              <button className="border border-white bg-warning text-white" type="button" data-bs-toggle="modal"
                data-bs-target="#editTimeModal">
                <FiEdit size={20}></FiEdit>
              </button>
              <button
                className="border border-white bg-danger text-white"
                onClick={(e) => {
                  useDeleteTime(e.currentTarget.parentElement!.parentElement!.id)
                }}
              >
                <FiTrash size={20}></FiTrash>
              </button>
            </td>
          </tr>)
        })}
      </tbody>
    </table>
  );
}
