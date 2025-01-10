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
            className="invert-colors cursor-pointer md:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[320px] border-none dark:bg-dark-300"
        >
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <h2 className="h2-bold pl-4">
            NoteFlow.<span className="text-[#12A7FB]">io</span>
          </h2>

          <div className="flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex flex-col gap-6 pt-16">
                <NavLinks isMobile />
              </section>
            </SheetClose>
            <div className="">
              <SheetClose asChild>
                <Button
                  className="primary-gradient body-regular w-full items-center justify-center rounded-lg p-6 shadow-none dark:text-white"
                  onClick={() => signOut({ callbackUrl: ROUTES.SIGN_IN })}
                >
                  Log Out
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavigation;
