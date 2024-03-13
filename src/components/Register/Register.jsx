import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Importa Axios
import { Input, Typography } from "@material-tailwind/react";
import "./Register.css"; // Asegúrate de tener la ruta correcta al archivo CSS

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Enviar datos de registro al backend
      const response = await axios.post('http://127.0.0.1:8000/register/', {
        email: email,
        password: password
      });

      // Manejar la respuesta del backend según corresponda
      console.log('Usuario registrado:', response.data);

      // Redirigir al usuario a la página de inicio o a donde sea necesario
      navigate("/add");
    } catch (error) {
      // Manejar errores de la solicitud al backend
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="background-image flex items-center justify-center h-screen">
      <main className="register-container">
        <div className="text-container mb-8">
          <Typography color="black" className="lemon-milk mb-4 text-3xl font-bold">
            Sign Up
          </Typography>
          <Typography color="black" className="lemon-milk text-lg">
            Sign up to enjoy the latest releases
          </Typography>
        </div>
        <div className="register-form">
        <div className="mb-4">
            <input
                className="input-field w-full py-4 px-6 text-sm color-black lemon-milk"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
            />
            </div>
            <div className="mb-4">
            <input
                className="input-field w-full py-4 px-6 text-sm color-black lemon-milk"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            </div>
          <div className="mb-6">
            <button
              className="galarama bg-[color:var(--azul)] text-[color:var(--blanco)] py-4 px-6 rounded-xl hover:bg-[color:var(--azul-hover)] duration-300"
              onClick={handleRegister}
            >
              <span className="button-text text-black text-xl font-bold">Sign Up</span>
            </button>
          </div>
        </div>
        <div className="flex mt-6">
          <p className="text-xl text-black">Already have an account?</p>
          <Link
            to="/login"
            className="text-xl text-black pl-2 underline cursor-pointer hover:text-[color:var(--azul)] transition-all duration-1500"
          >
            Log In
          </Link>
        </div>
      </main>
    </div>
  );
};
