import axios from "axios";

export const getAllClients = () => {
  return axios
    .get("http://127.0.0.1:8000/users/", {
      headers: {
        "Content-Type": "application/json",
        // Include the token in the Authorization header
        Authorization: `Bearer YOUR_USER_TOKEN_HERE`,
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
