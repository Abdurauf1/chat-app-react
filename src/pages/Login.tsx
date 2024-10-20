import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container flex h-screen justify-center items-center">
      <div className="w-[400px] py-5 px-8 bg-white rounded-md flex flex-col gap-2">
        <h1 className="text-center mb-5 font-bold text-2xl">Login</h1>
        <form className="flex flex-col w-full gap-4">
          <TextField label="Email" type="email" variant="outlined" required />
          <TextField label="Password" type="password" variant="outlined" required />
          <Button type="submit" variant="contained">
            Sign In
          </Button>
        </form>
        <p className="text-gray-600 text-right">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
