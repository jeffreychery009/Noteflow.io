import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { sideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";

import { SheetClose } from "../ui/sheet";

const NavLinks = ({ isMobile = false }: { isMobile: boolean }) => {
  const pathname = usePathname();
  const userId = 1;

  return (
    <>
      {sideBarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }

        const linkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive ? "primary-gradient text-white" : "text-black",
              "flex items-center justify-start gap-4 rounded-lg p-4",
              "dark:text-white"
            )}
          >
            <Image
              src={item.imgUrl}
              alt={item.label}
              width={24}
              height={24}
              className={cn(isActive ? "invert filter" : "", "dark:invert")}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "body-regular",
                "dark:text-white"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobile ? (
          <SheetClose asChild key={item.route}>
            {linkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{linkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
