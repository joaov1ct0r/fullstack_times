import React from "react";
import EditJogadorModal from "../components/EditJogadorModal";
import Header from "../components/Header";
import ListTime from "../components/ListTime";
import SearchTime from "../components/SearchTime";

export default function Time() {
  return (
    <div>
      <Header />
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