import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex flex-col items-center md:max-w-md">
        <div>
          <h2 className="h2-bold md:h2-bold-desktop tracking-tighter">
            Noteflow
          </h2>
        </div>
        <div className="mt-4">
          <h1 className="h1-semibold md:h1-semibold-desktop text-center md:leading-tight">
            Welcome to Noteflow! Where your thoughts take shape.
          </h1>
        </div>
        <div className="mt-12">
          <p className="body-regular text-center leading-relaxed md:text-base">
            Organize your thoughts, share ideas, and unlock smarter note-taking.
          </p>
        </div>
        <div className="mt-80 flex flex-col items-center gap-3">
          <Link href={ROUTES.SIGN_UP}>
            <Button className="btn-primary primary-gradient dark:text-white">
              Get Started
            </Button>
          </Link>
          <div>
            <p className="body-small md:text-[14px]">
              Already have an account?{" "}
              <span>
                <Link className="font-semibold" href={ROUTES.SIGN_IN}>
                  Sign In
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
