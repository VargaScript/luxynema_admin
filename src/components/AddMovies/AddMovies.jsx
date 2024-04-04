import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Input,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { firestore } from '../../utils/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const AddMovies = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [movie, setMovie] = useState({
    duration: "",
    genre: "",
    schedule: "",
    img_url: "",
    img_url_hd: "",
    price: "",
    sinopsis: "",
    title: "",
    trailer: "",
  });

  const { duration, genre, schedule, img_url, img_url_hd, price, sinopsis, title, trailer } = movie;

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const values = [duration, genre, schedule, img_url, img_url_hd, price, sinopsis, title, trailer];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      try {
        const moviesCollection = collection(firestore, 'movies');
        const querySnapshot = await getDocs(moviesCollection);
        const existingMovies = querySnapshot.docs.map(doc => doc.data().title);
        
        if (existingMovies.includes(title)) {
          errorMsg = "This movie already exists.";
          setErrorMsg(errorMsg);
        } else {
          const movieData = {
            id: uuidv4(),
            duration,
            genre,
            schedule,
            img_url,
            img_url_hd,
            price,
            sinopsis,
            title,
            trailer,
          };

          await addDoc(moviesCollection, movieData);

          setErrorMsg("");
          setMovie({
            duration: "",
            genre: "",
            schedule: "",
            img_url: "",
            img_url_hd: "",
            price: "",
            sinopsis: "",
            title: "",
            trailer: "",
          });
        }
      } catch (error) {
        console.error('Error adding movie:', error);
      }
    } else {
      errorMsg = "Please fill all the fields.";
      setErrorMsg(errorMsg);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  return (
    <>
      <Sidebar className="z-50"/>
      <div className="background h-screen flex items-center justify-center z-0 -mt-[50px]">
        <div className="main-form text-white w-full sm:w-1/2">
          <Typography className="text-white text-center -mt-10" variant="h1">
            Enter movie data
          </Typography>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <form onSubmit={handleOnSubmit} className="mt-8 mb-2 max-w-screen-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  color="white"
                  label="Title"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="duration"
                  value={duration}
                  onChange={handleInputChange}
                  color="white"
                  label="Duration"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  label="Genres"
                  type="text"
                  size="lg"
                  name="genre"
                  value={genre}
                  onChange={handleInputChange}
                  color="white"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="schedule"
                  value={schedule}
                  onChange={handleInputChange}
                  color="white"
                  label="Schedule (Separated by commas)"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="img_url"
                  value={img_url}
                  onChange={handleInputChange}
                  color="white"
                  label="Image URL"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="img_url_hd"
                  value={img_url_hd}
                  onChange={handleInputChange}
                  color="white"
                  label="HD Image URL"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="price"
                  value={price}
                  onChange={handleInputChange}
                  color="white"
                  label="Price"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="trailer"
                  value={trailer}
                  onChange={handleInputChange}
                  color="white"
                  label="Trailer URL"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <div className="form-control col-span-2">
                <Textarea
                  color="blue-gray"
                  className="text-white border-white"
                  name="sinopsis"
                  value={sinopsis}
                  onChange={handleInputChange}
                  label="Sinopsis"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <Button 
                type="submit" 
                className="px-32 bg-[color:var(--azul-fuerte)] text-white hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300"
              >
                Add Movie
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
