import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { Sidebar } from "../Sidebar/Sidebar";

export const Header = () => {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Typography variant="h1" color="white" className="text-center">
          Administrar Luxynema
        </Typography>
        <div className="flex flex-wrap justify-center">
          <Card className="w-96 mr-4 mb-4">
            <List>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="https://docs.material-tailwind.com/img/face-1.jpg"
                  />
                </ListItemPrefix>

                <div>
                  <Link to="add">
                    <Typography variant="h6" color="blue-gray">
                      Añadir película
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Añade la información de las películas listadas en la app
                      Luxynema
                    </Typography>
                  </Link>
                </div>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="alexander"
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Link to="list">
                    <Typography variant="h6" color="blue-gray">
                      Ver películas
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Lista, Actualiza, Elimina, las películas añadidas en la
                      app Luxynema
                    </Typography>
                  </Link>
                </div>
              </ListItem>
            </List>
          </Card>

          <Card className="w-96 ml-4 mb-4">
            <List>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="https://docs.material-tailwind.com/img/face-1.jpg"
                  />
                </ListItemPrefix>

                <div>
                  <Link to="adduser">
                    <Typography variant="h6" color="blue-gray">
                      Añadir usuario
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Añade los usuarios para que tengan acceso a Luxynema
                    </Typography>
                  </Link>
                </div>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="alexander"
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                  />
                </ListItemPrefix>
                <div>
                  <Link to="listusers">
                    <Typography variant="h6" color="blue-gray">
                      Ver usuarios
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Lista, Actualiza, Elimina, los usuarios añadidos en la app
                      Luxynema
                    </Typography>
                  </Link>
                </div>
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    </>
  );
};
