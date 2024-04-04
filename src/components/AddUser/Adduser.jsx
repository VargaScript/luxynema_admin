import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Input,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { firestore } from '../../utils/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const AddUser = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isSuperuser: false,
  });

  const { username, email, password, confirmPassword, isSuperuser } = user;

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const values = [username, email, password, confirmPassword];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      try {
        const usersCollection = collection(firestore, 'users');
        const querySnapshot = await getDocs(usersCollection);
        const existingUsers = querySnapshot.docs.map(doc => doc.data().email);
        
        if (existingUsers.includes(email)) {
          errorMsg = "This user already exists.";
          setErrorMsg(errorMsg);
        } else {
          const userData = {
            id: uuidv4(),
            username,
            email,
            password,
            isSuperuser,
          };

          await addDoc(usersCollection, userData);

          setErrorMsg("");
          setUser({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            isSuperuser: false,
          });
        }
      } catch (error) {
        console.error('Error adding user:', error);
      }
    } else {
      errorMsg = "Please, fill all the fields.";
      setErrorMsg(errorMsg);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setUser({ ...user, [name]: newValue });
  };

  return (
    <>
      <Sidebar className="z-50"/>
      <div className="background h-screen flex items-center justify-center z-0 -mt-[50px]">
        <div className="main-form text-white w-full sm:w-1/2">
          <Typography className="text-white text-center -mt-10" variant="h1">
            Enter user data
          </Typography>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <form onSubmit={handleOnSubmit} className="mt-8 mb-2 max-w-screen-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="text"
                  size="lg"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  color="white"
                  label="Username"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="email"
                  size="lg"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  color="white"
                  label="Email"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="password"
                  size="lg"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  color="white"
                  label="Password"
                />
              </div>
              <div className="form-control">
                <Input
                  variant="outlined"
                  type="password"
                  size="lg"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  color="white"
                  label="Confirm Password"
                />
              </div>
              <div className="form-control sm:col-span-2">
                <Checkbox
                  color="blue-gray"
                  checked={isSuperuser}
                  onChange={handleInputChange}
                  name="isSuperuser"
                  label="Superuser"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <Button 
                type="submit" 
                className="px-32 bg-[color:var(--azul-fuerte)] text-white hover:bg-[color:var(--azul-claro)] hover:text-[color:var(--azul-fuerte)] duration-300"
              >
                Add User
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
