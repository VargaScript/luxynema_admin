import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../Register/Register";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../credentials";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      navigate("/add");
    } else {
      console.log("Usuario no iniciado");
    }
  }, [navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/add");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="background-image">
      <div className="container">
        <div className="text-container text-center">
          <h1 className="text-2xl galarama">LUXYNEMA</h1>
          <p className="text-lg">THE THEATER FOR YOU</p>
        </div>

        <main className="login-container">
          <div className="text-container">
            <h1 className="text-2xl font-bold mb-2">SIGN IN!</h1>
          </div>
          <div className="mb-4">
            <input
              className="input-field"
              id="email"
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="input-field"
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            className="bg-white rounded-xl py-4 px-6 galarama cursor-pointer mb-4"
            onClick={handleRegister}
          >
            <span className="text-xl">Sign In</span>
          </button>

          <div className="flex">
            <p className="text-xl">Don't have an account?</p>
            <Link
              to="/register"
              element={<Register />}
              className="text-xl pl-2 underline cursor-pointer hover:text-[color:var(--azul)] transition-all duration-1500"
            >
              Register
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
