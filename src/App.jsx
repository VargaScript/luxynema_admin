import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { AddMovies } from "./components/AddMovies/AddMovies";
import { AddUser } from "./components/AddUser/AddUser";
import { ListMovies } from "./components/ListMovies/ListMovies";
/*
import { Clients } from "./components/Clients/Clients";
import { ListUsers } from "./components/ListUsers/ListUsers"; */

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add-movies" element={<AddMovies />} />
        <Route path="/add-users" element={<AddUser />}></Route>
        <Route path="/all-movies" element={<ListMovies />} />

        {/* 
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/listusers" element={<ListUsers />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
