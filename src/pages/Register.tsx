import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ChoosePhotoImg } from "../assets";

const Register = () => {
  return (
    <div className="container flex h-screen justify-center items-center">
      <div className="w-[400px] py-5 px-8 bg-white rounded-md flex flex-col gap-2">
        <h1 className="text-center mb-5 font-bold text-2xl">Register</h1>
        <form className="flex flex-col w-full gap-4">
          <TextField label="Name" type="text" variant="outlined" required />
          <TextField label="Email" type="email" variant="outlined" required />
          <TextField label="Password" type="password" variant="outlined" required />
          <input className="hidden" id="file" type="file" />
          <label className="cursor-pointer flex items-center gap-3" htmlFor="file">
            <img className="w-10" src={ChoosePhotoImg} alt="choose_photo" />
            <span>Add an avatar</span>
          </label>
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </form>
        <p className="text-gray-600 text-right">
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
