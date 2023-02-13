import React from "react";
import Header from "../components/Header";
import SearchTime from "../components/SearchTime";

export default function Time() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <SearchTime />
      </div>
    </div>
  )
}