import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { AddMovies } from "./components/AddMovies/AddMovies";
import { AddUser } from "./components/AddUser/AddUser";
import { ListMovies } from "./components/ListMovies/ListMovies";
import { ListUsers } from "./components/ListUsers/ListUsers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home-a" element={<Home />} />
        <Route path="/add-movies" element={<AddMovies />} />
        <Route path="/add-users" element={<AddUser />}></Route>
        <Route path="/all-movies" element={<ListMovies />} />
        <Route path="/all-users" element={<ListUsers />}></Route>
      </Routes>
    </>
  );
}

export default App;
