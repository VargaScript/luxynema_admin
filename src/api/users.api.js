import axios from "axios";

// Obtener el token almacenado (asegúrate de implementar esta función)
const getToken = () => {
  return sessionStorage.getItem("token"); // O sessionStorage, dependiendo de tus necesidades
};

export const getAllUsers = () => {
  // Crear una instancia de axios con la configuración base
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000", // Reemplaza con la URL de tu backend Django REST
  });

  // Interceptor para agregar el token Bearer a las solicitudes salientes
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers = {
          "Content-Type": "application/json",
          // Include the token in the Authorization header
          Authorization: `Bearer ${token}`, //El token va despues del bearer y un espacio
        };
        console.log(token);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance
    .get("/users/")
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// import axios from "axios";

// export const getAllUsers = () => {
//   return (
//     axios
//       .get("http://127.0.0.1:8000/users/", {
//         headers: {
//           "Content-Type": "application/json",
//           // Include the token in the Authorization header
//           Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwOWY4ZTMzN2ZjNzg1NTE0ZTExMGM2ZDg0N2Y0M2M3NDM1M2U0YWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZjb20tZWYxYTIiLCJhdWQiOiJtdmNvbS1lZjFhMiIsImF1dGhfdGltZSI6MTcxMDMxMDQ0MiwidXNlcl9pZCI6IkxLSUU2QzYwRVVNMFBqU0VIRXI1S2FKZTBuMzIiLCJzdWIiOiJMS0lFNkM2MEVVTTBQalNFSEVyNUthSmUwbjMyIiwiaWF0IjoxNzEwMzEwNDQyLCJleHAiOjE3MTAzMTQwNDIsImVtYWlsIjoidXNlcjFAYWRtaW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXIxQGFkbWluLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.rbQnqxNniNJ70p2zSckgjUdm1RZYkaWtq1UlUQhO-YwbdHvRCx5-rERxfv800OI3-hI38uOiGFySpF6UvzerCrtAplbtUa_n2XAP0dJtxVfe0Ictgu6Ino4-hKwuaDgoxo47vPF0sIBzqPKCcCI-C3KBnZ9V6Lcyh2JCBq-JyTEItROtfBUL6ItOdiL93Y_LGksEivSS0czx1zoy3Em5sXo0wMParIrrSkN8FG0i9LEw-zrtmTTkxBYPtV3i3A9vXqVfZ8UwTMmCEr_rwQNvAqcogjmgItewSdMXtvVlsnXxcJMgEgfKckPrwEpSIlZiqxjvVyJgQGhL-psbk89Vag`, //El token va despues del bearer y un espacio
//         },
//       })
//       // .then(function (response) {
//       //   console.log(response.data);
//       // })
//       .catch(function (error) {
//         console.log(error);
//       })
//   );
// };
