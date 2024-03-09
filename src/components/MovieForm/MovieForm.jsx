import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Input,
  Form,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export const MovieForm = (props) => {
  const [pelicula, setPelicula] = useState({
    duracion: props.pelicula ? props.pelicula.duracion : "",
    generos: props.pelicula ? props.pelicula.generos : "",
    horario: props.pelicula ? props.pelicula.horario : "",
    img_url: props.pelicula ? props.pelicula.img_url : "",
    img_url_hd: props.pelicula ? props.pelicula.img_url_hd : "",
    precio: props.pelicula ? props.pelicula.precio : "",
    sinopsis: props.pelicula ? props.pelicula.sinopsis : "",
    titulo: props.pelicula ? props.pelicula.titulo : "",
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
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="main-form text-white container w-full sm:w-1/2">
            <Typography className="text-white mt-6" variant="h3">
              Ingrese los datos de la pelicula
            </Typography>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <form
              onSubmit={handleOnSubmit}
              className="mt-8 mb-2 max-w-screen-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control mb-4" controlId="titulo">
                  <label className="label">Título de la Película</label>
                  <Input
                    variant="outlined"
                    type="text"
                    size="lg"
                    name="titulo"
                    value={titulo}
                    placeholder="Ingrese el título de la película"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mb-4" controlId="duracion">
                  <label className="label">Duración</label>
                  <Input
                    variant="outlined"
                    type="text"
                    size="lg"
                    name="duracion"
                    value={duracion}
                    placeholder="Ingrese la duración de la película"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mb-4" controlId="generos">
                  <label className="label">Géneros</label>
                  <Input
                    variant="outlined"
                    type="text"
                    size="lg"
                    name="generos"
                    value={generos}
                    placeholder="Ingrese los géneros de la película"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mb-4" controlId="horario">
                  <label className="label">Horario</label>
                  <Input
                    variant="outlined"
                    type="text"
                    size="lg"
                    name="horario"
                    value={horario}
                    placeholder="Ingrese el horario de la película"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mb-4" controlId="img_url">
                  <label className="label">URL de la Imagen</label>
                  <Input
                    variant="outlined"
                    type="text"
                    size="lg"
                    name="img_url"
                    value={img_url}
                    placeholder="Ingrese la URL de la imagen"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mb-4" controlId="img_url_hd">
                  <label className="label">URL de la Imagen HD</label>
                  <Input
                    variant="outlined"
                    type="text"
                    size="lg"
                    name="img_url_hd"
                    value={img_url_hd}
                    placeholder="Ingrese la URL de la imagen HD"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mb-4" controlId="precio">
                  <label className="label">Precio de la Película</label>
                  <Input
                    variant="outlined"
                    type="text"
                    size="lg"
                    name="precio"
                    value={precio}
                    placeholder="Ingrese el precio de la película"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mb-4" controlId="sinopsis">
                  <label className="label">Sinopsis</label>
                  <Textarea
                    color="blue-gray"
                    className="input-control"
                    name="sinopsis"
                    value={sinopsis}
                    placeholder="Ingrese la sinopsis de la película"
                    onChange={handleInputChange}
                  />
                  <Button type="submit" color="blue" className="btn-primary">
                    Añadir Pelicula
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
