import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <header className="py-4 px-3">
      <nav className="h-full flex justify-between items-center">
        <h1 className="font-bold text-2xl">Talkify</h1>
        <Button variant="contained" size="small" color="error">
          Log Out
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
