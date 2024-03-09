import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { Header } from "./components/Header/Header";
import { Clients } from "./components/Clients/Clients";
import { AddMovie } from "./components/AddMovie/AddMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
