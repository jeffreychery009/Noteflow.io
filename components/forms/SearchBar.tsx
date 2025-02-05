import React from "react";

import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <div>
      <Input
        className="background-light200_dark200 h-14 w-full rounded-md border-[0.5px] border-[#CCCCCC] p-6 shadow-sm outline-none dark:border-dark-500 dark:shadow-sm"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
