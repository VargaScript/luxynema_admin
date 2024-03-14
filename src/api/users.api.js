import axios from "axios";

const getToken = () => {
  const token = sessionStorage.getItem("idToken");
  console.log("Token recuperado:", token);
  return token;
};

export const getUserInfo = async () => {
  const token = getToken();

  if (!token) {
    console.error("No hay token disponible");
    throw new Error("No hay token disponible");
  }

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      console.log("Solicitud saliente con token:", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  try {
    const response = await axiosInstance.get("/users/");
    console.log("Información del usuario recuperada:", response.data);

    // Agregar console.log para mostrar el token recibido en la respuesta
    console.log("Token recibido en la respuesta:", response.data.idToken);

    return response.data;
  } catch (error) {
    console.error("Error al obtener información del usuario:", error);
    throw new Error("Error al obtener información del usuario");
  }
};

export const deleteUser = async (userId) => {
  const token = getToken();

  if (!token) {
    console.error("No hay token disponible");
    throw new Error("No hay token disponible");
  }

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      console.log("Solicitud saliente con token:", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  try {
    await axiosInstance.delete(`/users/${userId}`);
    console.log("Usuario eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw new Error("Error al eliminar usuario");
  }
};
