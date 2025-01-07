import Image from "next/image";
import { signOut } from "next-auth/react";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

import NavLinks from "./NavLinks";
import { Button } from "../ui/button";

const MobileNavigation = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/menu.svg"
            alt="menu-icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none">
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <h2 className="h2-bold pl-4">
            NoteFlow.<span className="text-[#12A7FB]">io</span>
          </h2>

          <div className="mt-[72px] flex flex-col justify-between overflow-y-auto">
            <section className="flex flex-col gap-5">
              <NavLinks isMobile />
            </section>
          </div>

          <div className="mb-8 p-4">
            <SheetClose asChild>
              <Button
                className="primary-gradient base-bold mt-[160px] w-full items-center justify-center rounded-lg p-6 shadow-none"
                onClick={() => signOut({ callbackUrl: ROUTES.SIGN_IN })}
              >
                Log Out
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavigation;
