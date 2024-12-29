
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";


const Home = () => {
  return (
    <main>
      <div className="m-7 mt-28 flex flex-col items-center md:mx-auto md:mt-20 md:max-w-sm lg:mx-auto lg:max-w-md">
        <div>
          <h2 className="h2-bold md:h2-bold-desktop tracking-tighter">Noteflow</h2>
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
        <div className="gap mt-80 flex flex-col items-center gap-3">
          <Button className="btn-primary">
            <Link href="">Get Started</Link>
          </Button>
          <div>
            <p className="body-small">
              Already have an account?{" "}
              <span>
                <Link href="">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
