import axios from "axios";

// Obtener el token almacenado (asegúrate de implementar esta función)
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
    const response = await axiosInstance.get("/user_info/");
    console.log("Información del usuario recuperada:", response.data); // Verifica si la información del usuario se está recuperando correctamente
    return response.data;
  } catch (error) {
    console.error("Error al obtener información del usuario:", error); // Verifica si hay errores al obtener la información del usuario
    throw new Error("Error al obtener información del usuario");
  }
};
