import { TextField } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleIsFocused = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <div className="my-2 w-full">
        <TextField
          className="w-full"
          onFocus={handleIsFocused}
          onBlur={handleBlur}
          autoComplete="off"
          focused={isFocused}
          size="small"
          type="text"
          placeholder="Search"
        />
      </div>
      {isFocused && (
        <div className="absolute w-full flex items-center justify-center h-fit index-1 bg-white py-2">
          <p className="text-center">No users found</p>
        </div>
      )}
    </div>
  );
};

export default Search;
