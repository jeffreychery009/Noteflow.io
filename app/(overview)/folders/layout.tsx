import React from "react";

import NavBar from "@/components/navigation/NavBar";

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <div>
          <NavBar />
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default OverviewLayout;
