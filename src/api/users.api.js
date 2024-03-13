import axios from "axios";

// Obtener el token almacenado (asegúrate de implementar esta función)
const getToken = () => {
  const token = sessionStorage.getItem("token"); 
  console.log("Token recuperado:", token); 
  return token;
};

export const getAllUsers = async () => {
  const token = getToken();

  if (!token) {
    console.error("No hay token disponible"); 
    throw new Error("No hay token disponible");
  }

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/login_admin/", 
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      // Agregar el token a las solicitudes salientes
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
    console.log("Usuarios recuperados:", response.data); // Verifica si los usuarios se están recuperando correctamente
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error); // Verifica si hay errores al obtener los usuarios
    throw new Error("Error al obtener usuarios");
  }
};
