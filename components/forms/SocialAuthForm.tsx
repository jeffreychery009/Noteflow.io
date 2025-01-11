"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass = `h-[48px] rounded-[12px] border-none flex flex-1 items-center justify-center  bg-[#D9D9D9] hover:bg-[#D1D1D1] text-dark  shadow-none w-auto dark:bg-dark-700 hover:dark:bg-dark-600 dark:text-white  `;

  const handleSignIn = async (provider: "google" | "twitter" | "facebook") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.FOLDERS,
        redirect: false,
      });
    } catch (error) {
      toast({
        title: "Sign-In Failed!",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while signing in.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => handleSignIn("google")} className={buttonClass}>
        <Image src="/icons/google.svg" width={24} height={24} alt="Google" />
        <span>Log in with Google</span>
      </Button>
      <Button className={buttonClass}>
        <Image
          src="/icons/apple.svg"
          width={24}
          height={24}
          alt="Google"
          className="invert-colors"
        />
        <span>Log in with Apple</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
