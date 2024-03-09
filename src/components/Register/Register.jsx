import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { Input, Typography } from "@material-tailwind/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../credentials";
import "./Register.css"; // Asegúrate de tener la ruta correcta al archivo CSS

export const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      navigate("/home");
    } else {
      console.log("Usuario no iniciado");
    }
  }, [navigate]);

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      navigate("/add");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
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
            element={<Login />}
            className="text-xl text-black pl-2 underline cursor-pointer hover:text-[color:var(--azul)] transition-all duration-1500"
          >
            Log In
          </Link>
        </div>
      </main>
    </div>
  );
};
