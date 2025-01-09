import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        className="background-light200_dark200 h-16 w-full rounded-2xl border-[0.5px] border-[#CCCCCC] p-6 text-[#8F8F8F] shadow-sm outline-none dark:border-[#3C3C3C] dark:shadow-sm"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
