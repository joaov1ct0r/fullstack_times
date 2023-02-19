import React from "react";
import EditJogadorModal from "../components/EditJogadorModal";
import ErrorHandler from "../components/ErrorHandler";
import Header from "../components/Header";
import ListTime from "../components/ListTime";
import SearchTime from "../components/SearchTime";

export default function Time() {
  return (
    <div>
      <Header />
      <ErrorHandler />
      <div className="d-flex justify-content-center mt-5">
        <SearchTime />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ListTime />
      </div>
      <EditJogadorModal />
    </div>
  )
}