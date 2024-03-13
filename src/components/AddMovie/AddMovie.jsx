import React from "react";
import { MovieForm } from "../MovieForm/MovieForm";
import { Sidebar } from "../Sidebar/Sidebar";

export const AddMovie = () => {
  const handleOnSubmit = (movie) => {
    console.log(movie);
  };
  return (
    <>
      <Sidebar />
      <React.Fragment>
        <MovieForm handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    </>
  );
};
