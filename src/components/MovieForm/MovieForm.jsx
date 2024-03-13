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
    const { name, value } = event.target;
    setPelicula({ ...pelicula, [name]: value });
  };
  return (
    <>
      <div className="">
        <div className="">
          <div className="flex flex-wrap justify-center">
            <div className="main-form text-white container w-full sm:w-1/2">
              <Typography className="text-white mt-6" variant="h4">
                Ingrese los datos de la pelicula
              </Typography>
              {errorMsg && <p className="errorMsg">{errorMsg}</p>}
              <form
                onSubmit={handleOnSubmit}
                className="mt-8 mb-2 max-w-screen-lg"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  <div className="form-control mb-4" controlId="titulo">
                    <Input
                      variant="outlined"
                      type="text"
                      size="lg"
                      name="titulo"
                      value={titulo}
                      onChange={handleInputChange}
                      color="white"
                      label="Titulo"
                    />
                  </div>
                  <div className="form-control mb-4" controlId="duracion">
                    <Input
                      variant="outlined"
                      type="text"
                      size="lg"
                      name="duracion"
                      value={duracion}
                      onChange={handleInputChange}
                      color="white"
                      label="Duración"
                    />
                  </div>
                  <div className="form-control mb-4" controlId="generos">
                    <Input
                      variant="outlined"
                      label="Géneros"
                      type="text"
                      size="lg"
                      name="generos"
                      value={generos}
                      onChange={handleInputChange}
                      color="white"
                    />
                  </div>
                  <div className="form-control mb-4" controlId="horario">
                    <Input
                      variant="outlined"
                      type="text"
                      size="lg"
                      name="horario"
                      value={horario}
                      onChange={handleInputChange}
                      color="white"
                      label="Horario"
                    />
                  </div>
                  <div className="form-control mb-4" controlId="img_url">
                    <Input
                      variant="outlined"
                      type="text"
                      size="lg"
                      name="img_url"
                      value={img_url}
                      onChange={handleInputChange}
                      color="white"
                      label="URL de la Imagen"
                    />
                  </div>
                  <div className="form-control mb-4" controlId="img_url_hd">
                    <Input
                      variant="outlined"
                      type="text"
                      size="lg"
                      name="img_url_hd"
                      value={img_url_hd}
                      onChange={handleInputChange}
                      color="white"
                      label="URL de la Imagen HD"
                    />
                  </div>
                  <div className="form-control mb-4" controlId="precio">
                    <Input
                      variant="outlined"
                      type="text"
                      size="lg"
                      name="precio"
                      value={precio}
                      onChange={handleInputChange}
                      color="white"
                      label="Precio de la Película"
                    />
                  </div>
                  <div className="form-control mb-4" controlId="sinopsis">
                    <Textarea
                      color="blue-gray"
                      className="input-control"
                      name="sinopsis"
                      value={sinopsis}
                      onChange={handleInputChange}
                      label="Sinopsis"
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

        <div></div>
      </div>
    </>
  );
};
