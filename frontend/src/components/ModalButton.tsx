import React from "react";
import { FiPlusCircle } from "react-icons/fi";

export default function ModalButton(): JSX.Element {
  return (
    <div className="position-absolute bottom-0 end-0">
      <button
        type="button"
        className="btn rounded-circle"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FiPlusCircle size={50} color="#0000FF"></FiPlusCircle>
      </button>
    </div>
  );
}
