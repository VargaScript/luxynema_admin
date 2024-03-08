import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1>Aplicación de Administración de Libros</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Libros
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Agrega Libro
        </NavLink>
      </div>
    </header>  )
}
