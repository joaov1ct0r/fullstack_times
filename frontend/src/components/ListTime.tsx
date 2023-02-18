import React, { useEffect } from "react";
import { FiTrash, FiEdit } from "react-icons/fi";
import IJogador from "../interfaces/IJogador";
import useContextStates from "../hooks/useContextStates";

export default function ListTime() {
  const { time, setJogador, deleteJogador, } = useContextStates();
  return (
    <table className="table bg-white w-75 mt-3 border border-dark">
      <thead className="text-center">
        <tr>
          <th scope="col">Time ID</th>
          <th scope="col">Time Nome</th>
          <th scope="col">Jogador Nome</th>
          <th scope="col">Jogador Idade</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {time ? time.Jogador.map((jogador: IJogador) => {

          return (<tr
            className="text-center"
            key={String(jogador.id)}
            id={String(jogador.id)}
          >
            <td>
              {time.id}
            </td>
            <td>{time.nome}</td>
            <td>{jogador.nome}</td>
            <td>{jogador.idade}</td>
            <td>
              <button className="border border-white bg-warning text-white" type="button" data-bs-toggle="modal"
                data-bs-target="#editJogadorModal" onClick={() => setJogador(jogador)}>
                <FiEdit size={20}></FiEdit>
              </button>
              <button
                className="border border-white bg-danger text-white"
                onClick={() => {
                  deleteJogador(String(jogador.id))
                }}
              >
                <FiTrash size={20}></FiTrash>
              </button>
            </td>
          </tr>)
        }): <></>}
      </tbody>
    </table>
  );
}
