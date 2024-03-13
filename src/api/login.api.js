import axios from "axios";

// URL del backend para el registro de usuarios
const registerURL = "http://127.0.0.1:8000/register/";

// URL del backend para iniciar sesión
const loginURL = "http://127.0.0.1:8000/login_admin/";

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(registerURL, userData);
    console.log("Usuario registrado exitosamente:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw new Error("Error al registrar usuario");
  }
};

// Función para iniciar sesión
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(loginURL, loginData);
    console.log("Inicio de sesión exitoso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw new Error("Error al iniciar sesión");
  }
};
