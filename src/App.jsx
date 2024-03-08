import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "@material-tailwind/react";
import { Header } from "./components/Header/Header";
import { Clients } from "./components/Clients/Clients";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
      </Routes>
    </>
  );
}

export default App;
