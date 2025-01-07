import React from "react";

import NavBar from "@/components/navigation/NavBar";

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="fixed left-0 top-0 z-10 w-full">
        <NavBar />
      </nav>
      <div className="mt-32">{children}</div>
    </>
  );
};

export default OverviewLayout;
