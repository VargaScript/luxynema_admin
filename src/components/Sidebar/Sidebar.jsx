import { useState } from "react";
import "./Sidebar.css";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, PowerIcon } from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  UserCircleIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, firestore } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const Sidebar = () => {
  const [openMovies, setOpenMovies] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const navigate = useNavigate();


  const handleToggleMovies = () => {
    setOpenMovies(!openMovies);
  };

  const handleToggleUsers = () => {
    setOpenUsers(!openUsers);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setSesionIniciada(false);
      console.log("Logout clicked");
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      <IconButton variant="text" color="white" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <div/>
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <Link to="/home" className="hover:text-[color:var(--azul-fuerte)] duration-300">
            <Typography variant="h5">
              Luxynema Administrative 
            </Typography>
            </Link>
          </div>
          <List>
            <Accordion 
            open={openMovies}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openMovies ? "rotate-180" : ""
                  }`}
                />
              }
              onClick={handleToggleMovies}
            >
              <ListItem className="p-0">
                <AccordionHeader className="b-0 p-3 text-[color:var(--azul-fuerte)] hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300">
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Movies
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                    <Link to="/all-movies">
                  <ListItem className="border-b-0 pl-5 text-[color:var(--azul-fuerte)] hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    See All Movies
                  </ListItem>
                    </Link>
                  <ListItem className="border-b-0 pl-5 text-[color:var(--azul-fuerte)] hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/add-movies">
                    Add Movie
                    </Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openUsers}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openUsers ? "rotate-180" : ""
                  }`}
                />
              }
              onClick={handleToggleUsers}
            >
              <ListItem className="p-0">
                <AccordionHeader className="b-0 p-3 text-[color:var(--azul-fuerte)] hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300">
                  <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Users
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem className="border-b-0 pl-5 text-[color:var(--azul-fuerte)] hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/see-users">
                    See All Users
                    </Link>
                  </ListItem>
                  <ListItem className="border-b-0 pl-5 text-[color:var(--azul-fuerte)] hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/add-users">
                    Add Admin User
                    </Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>

            <hr className="my-2 border-blue-gray-50" />
            <ListItem className="text-[color:var(--azul-fuerte)] hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300">
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              <div onClick={handleLogout}>
              Log out
              </div>
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
};
