import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export const MovieForm = () => {
  const [pelicula, setPelicula] = useState({
    duracion: props.pelicula ? props.pelicula.duracion : "",
    generos: props.pelicula ? props.pelicula.generos : "",
    horario: props.pelicula ? props.pelicula.horario : "",
    img_url: props.pelicula ? props.pelicula.img_url : "",
    img_url_hd: props.pelicula ? props.pelicula.img_url_hd : "",
    precio: props.pelicula ? props.pelicula.precio : "",
    sinopsis: props.pelicula ? props.pelicula.sinopsis : "",
    titulo: props.pelicula ? props.pelicula.titulo : "",
    precio: props.pelicula ? props.pelicula.precio : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const {
    duracion,
    generos,
    horario,
    img_url,
    img_url_hd,
    precio,
    sinopsis,
    titulo,
  } = pelicula;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const valores = [
      duracion,
      generos,
      horario,
      img_url,
      img_url_hd,
      precio,
      sinopsis,
      titulo,
    ];
    let errorMsg = "";

    const todosLosCamposLlenos = valores.every((campo) => {
      const valor = `${campo}`.trim();
      return valor !== "" && valor !== "0";
    });

    if (todosLosCamposLlenos) {
      const pelicula = {
        id: uuidv4(),
        duracion,
        generos,
        horario,
        img_url,
        img_url_hd,
        precio,
        sinopsis,
        titulo,
      };
      props.handleOnSubmit(pelicula);
    } else {
      errorMsg = "Por favor, rellene todos los campos.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { nombre, valor } = event.target;

    // Validación y actualización según el nombre del campo
    switch (nombre) {
      case "duracion":
        // Validar que el valor sea un número entero positivo
        if (
          valor === "" ||
          (parseInt(valor) === +valor && parseInt(valor) > 0)
        ) {
          setPelicula((prevState) => ({
            ...prevState,
            [nombre]: valor,
          }));
        }
        break;
      case "precio":
        // Validar que el valor sea un número decimal positivo
        if (
          valor === "" ||
          (valor.match(/^\d{1,}(\.\d{0,2})?$/) && parseFloat(valor) > 0)
        ) {
          setPelicula((prevState) => ({
            ...prevState,
            [nombre]: valor,
          }));
        }
        break;
      case "generos":
        // No se realiza validación, se actualiza directamente
        setPelicula((prevState) => ({
          ...prevState,
          [nombre]: valor,
        }));
        break;
      case "horario":
        // Validar que el valor tenga formato de hora
        if (valor === "" || valor.match(/^(?:[0-1]\d|2[0-3]):[0-5]\d$/)) {
          setPelicula((prevState) => ({
            ...prevState,
            [nombre]: valor,
          }));
        }
        break;
      case "img_url":
      case "img_url_hd":
      case "sinopsis":
      case "titulo":
        // No se realiza validación, se actualiza directamente
        setPelicula((prevState) => ({
          ...prevState,
          [nombre]: valor,
        }));
        break;
      default:
        // Se ignora el campo no reconocido
        break;
    }
  };
  return <div>MovieForm</div>;
};
