import axios from "axios";

export const getAllMovies = () => {
  return (
    axios
      .get("http://127.0.0.1:8000/movies/", {
        headers: {
          "Content-Type": "application/json",
          // Include the token in the Authorization header
          Authorization: `Bearer USER_TOKEN`, //El token va despues del bearer y un espacio
        },
      })
      // .then(function (response) {
      //   console.log(response.data);
      // })
      .catch(function (error) {
        console.log(error);
      })
  );
};
