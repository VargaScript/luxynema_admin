import React from "react";
import MovieForm from "../MovieForm/MovieForm";

export const AddMovie = () => {
  const handleOnSubmit = (movie) => {
    console.log(movie);
  };
  return (
    <React.Fragment>
      <MovieForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};
