import { Link } from "react-router-dom";
import "./Main.css"
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export const Main = () => {
  return (
    <div className="flex h-screen">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-center">
          <Typography variant="h1" color="white" className="-mt-10 mb-10">
            Manage Luxynema
          </Typography>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center mr-4 mb-8">
              <Typography variant="h2" color="white" className="mb-4">
                Movies
              </Typography>
              <Card className="w-96">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src="https://www.bing.com/images/search?view=detailV2&ccid=jixXH%2fEl&id=7A78E7861717FA06AB1A30B1AF05571ACC5B3883&thid=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8e2c571ff125b3531705198a15d3103c%3frik%3dgzhbzBpXBa%252bxMA%26riu%3dhttp%253a%252f%252fpluspng.com%252fimg-png%252fuser-png-icon-big-image-png-2240.png%26ehk%3dVeWsrun%252fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2240&expw=2240&q=user+icon&simid=607994213930322487&FORM=IRPRST&ck=43785805F7FA52367445A23AAAC2271C&selectedIndex=7&itb=1"
                      />
                    </ListItemPrefix>

                    <div>
                      <Link to="/add-movies">
                        <Typography variant="h6" color="blue-gray">
                          Add Movie
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
                      <Link to="/all-movies">
                        <Typography variant="h6" color="blue-gray">
                          See Movies
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          See, Update and Delete all of the movies on the Luxynema app
                        </Typography>
                      </Link>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </div>
            <div className="flex flex-col items-center ml-4 mb-8">
              <Typography variant="h2" color="white" className="mb-4">
                Users
              </Typography>
              <Card className="w-96">
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
                      <Link to="/adduser">
                        <Typography variant="h6" color="blue-gray">
                          Add User
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
                          See Users
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
        </div>
      </div>
    </div>
  );
};
