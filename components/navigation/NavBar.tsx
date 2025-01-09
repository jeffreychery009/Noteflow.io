"use client";

import { usePathname } from "next/navigation";
import React from "react";

import ROUTES from "@/constants/routes";

import MobileNavigation from "./MobileNavigation";
import { ThemeToggle } from "./Theme";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="top-0 min-h-24 w-full">
        <header className="flex items-center justify-between p-8">
          {pathname === ROUTES.FOLDERS ? (
            <h2 className="h2-bold">Folders</h2>
          ) : pathname === ROUTES.NOTES ? (
            <h2 className="h2-bold">Notes</h2>
          ) : null}

          <div className="flex items-center justify-between gap-6">
            <div>
              <ThemeToggle />
            </div>
            <MobileNavigation />
          </div>
        </header>
      </nav>
    </>
  );
};

export default NavBar;
