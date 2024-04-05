import { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import {
  Button,
  Input,
  Typography,
  Card,
  CardHeader,
  Spinner,
} from "@material-tailwind/react";
import { firestore } from "../../utils/firebase";
import { collection, doc, updateDoc, getDocs } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ListMovies = () => {
  const [loader, setLoader] = useState(true);
  const [movies, setMovies] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isExtendedVisible, setIsExtendedVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCloseHandled, setIsCloseHandled] = useState(false);
  const [editedMovie, setEditedMovie] = useState({
    id: "",
    duration: "",
    genre: "",
    img_url: "",
    img_url_hd: "",
    price: "",
    schedule: "",
    sinopsis: "",
    title: "",
    trailer: "",
  });

  useEffect(() => {
    const asyncLoader = async () => {
      setLoader(true);

      await new Promise((resolve) => setTimeout(resolve, 750));

      setLoader(false);
    };

    asyncLoader();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesCollection = collection(firestore, "movies");
        const querySnapshot = await getDocs(moviesCollection);
        const movieData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleEditClick = (movie) => {
    setEditedMovie(movie);
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedMovie({ ...editedMovie, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const movieRef = doc(firestore, "movies", editedMovie.id);
      await updateDoc(movieRef, {
        duration: editedMovie.duration,
        genre: editedMovie.genre,
        img_url: editedMovie.img_url,
        img_url_hd: editedMovie.img_url_hd,
        price: editedMovie.price,
        schedule: editedMovie.schedule,
        sinopsis: editedMovie.sinopsis,
        title: editedMovie.title,
        trailer: editedMovie.trailer,
      });
      setEditMode(false);
      setEditedMovie({
        id: "",
        duration: "",
        genre: "",
        img_url: "",
        img_url_hd: "",
        price: "",
        schedule: "",
        sinopsis: "",
        title: "",
        trailer: "",
      });
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const handleEventClick = (event) => {
    setSelectedMovie(event);
    setIsAnimating(true);
    setIsCloseHandled(false);

    setTimeout(() => {
      setIsExtendedVisible(true);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <>
      <ToastContainer />
      <div className="relative h-screen">
        {loader && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Spinner className="h-12 w-12 mb-4" color="indigo" />
          </div>
        )}
        <div
          className={`${
            loader ? "opacity-0" : "opacity-100"
          } transition-opacity duration-700`}
        >
          <Sidebar className="z-50" />
          <section className="bg-white mx-10 md:mx-10 rounded-lg mt-4 md:mt-10 z-0 above-all">
            <div className="px-4 md:px-20 py-4 md:py-10">
              <h2 className="uppercase text-xl md:text-2xl font-medium lemon-milk text-center md:text-left sm:text-center">
                All Movies
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-6 gap-y-10 mt-4 md:mt-5">
                {movies.map((movie) => (
                  <li
                    className="grid"
                    key={movie.id}
                    onClick={() => handleEventClick(movie)}
                  >
                    <div className="overlay-gradient">
                      <img
                        className="w-48 md:w-56 lg:h-96 md:h-72 mx-auto md:mx-0 cursor-pointer hover:opacity-80 duration-500 hover:scale-105"
                        alt={movie.title}
                        src={movie.img_url}
                      />
                    </div>
                    <h3 className="uppercase mt-2 sm:mt-4 font-medium lemon-milk text-center md:text-left">
                      {movie.title}
                    </h3>
                    <p className="mt-1 font-bold text-sm lemon-milk text-gray-600 text-center md:text-left">
                      {movie.duration} min
                    </p>
                  </li>
                ))}
              </ul>
              {selectedMovie && (
                <>
                  <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                  <div
                    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                      isExtendedVisible ? "opacity-100" : "opacity-0"
                    } ${isAnimating ? "transition-opacity" : ""}`}
                    onClick={closeDetailedView}
                  >
                    <Card className="mt-6 w-96">
                      <CardHeader color="blue-gray" className="relative h-56">
                        <img
                          className="mx-auto my-auto w-full h-full object-cover rounded-md"
                          src={selectedMovie.img_url_hd}
                          alt={selectedMovie.title}
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                        >
                          <p className="text-gray-700 mb-4">
                            <span className="font-bold text-3xl">
                              {selectedMovie.title}
                            </span>
                          </p>
                          <p className="text-gray-700">
                            {selectedMovie.genre ? selectedMovie.genre : "N/A"}
                          </p>
                          <p className="font-bold text-gray-700">
                            {selectedMovie.duration} min
                          </p>
                        </Typography>
                        <Typography>
                          <div className="mt-2 text-gray-700 whitespace-normal">
                            {selectedMovie.sinopsis
                              ? selectedMovie.sinopsis
                              : "N/A"}
                          </div>
                        </Typography>
                      </CardBody>
                      <CardFooter className="pt-0">
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                          <Link
                            to={`/schedule?id=${selectedMovie.id}`}
                            className="rounded-md text-center flex-1 bg-[var(--azul-fuerte)] hover:bg-[var(--azul)] hover:text-black"
                          >
                            <Button className="bg-[var(--azul-fuerte)] hover:bg-[var(--azul)] hover:text-black shadow-none transition duration-500">
                              Agendar boletos
                            </Button>
                          </Link>
                          <Button className="flex-1 transition duration-500 bg-[var(--azul-fuerte)] hover:bg-[var(--azul)] hover:text-black">
                            <p
                              className="rounded-md"
                              onClick={(e) => {
                                e.preventDefault();
                                closeDetailedView();
                              }}
                            >
                              Cerrar
                            </p>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </>
              )}

              {/*  <div className="mt-8 mb-2 max-w-screen-lg bg-white rounded-lg px-4 md:px-20 py-4 md:py-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-6 gap-y-10 mt-4 md:mt-5">
              {movies.map((movie) => (
                <li key={movie.id}>
                  {editMode && editedMovie.id === movie.id ? (
                    < className="flex flex-col">
                      <Input
                        className="mb-2"
                        type="text"
                        name="title"
                        value={editedMovie.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        />
                      <Input
                        className="mb-2"
                        type="text"
                        name="duration"
                        value={editedMovie.duration}
                        onChange={handleInputChange}
                        placeholder="Duration"
                        />
                      <Input
                        className="mb-2"
                        type="text"
                        name="genre"
                        value={editedMovie.genre}
                        onChange={handleInputChange}
                        placeholder="Genre"
                        />
                      <Input
                        className="mb-2"
                        type="text"
                        name="img_url"
                        value={editedMovie.img_url}
                        onChange={handleInputChange}
                        placeholder="Image URL"
                      />
                      <Button onClick={handleSaveChanges}>Save Changes</Button>
                    </>
                  ) : (
                    <div>
                      <img
                        className="w-full h-64 object-cover mb-4"
                        src={movie.img_url}
                        alt={movie.title}
                        />
                      <Typography variant="h6" color="gray">
                        Title: {movie.title}
                      </Typography>
                      <Typography variant="body1" color="gray">
                        Duration: {movie.duration} min
                      </Typography>
                      <Typography variant="body1" color="gray">
                        Genre: {movie.genre}
                      </Typography>
                      <Button onClick={() => handleEditClick(movie)}>Edit</Button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
