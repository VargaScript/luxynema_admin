import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { Header } from "./components/Header/Header";
import { Clients } from "./components/Clients/Clients";
import { AddMovie } from "./components/AddMovie/AddMovie";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ListMovies } from "./components/ListMovies/ListMovies";
import { Adduser } from "./components/AddUser/Adduser";
import { ListUsers } from "./components/ListUsers/ListUsers";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/home" element={<Header />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/list" element={<ListMovies />}></Route>
        <Route path="/adduser" element={<Adduser />}></Route>
        <Route path="/listusers" element={<ListUsers />}></Route>

      </Routes>
    </>
  );
}

export default App;
