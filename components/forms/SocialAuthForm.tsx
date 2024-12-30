"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass = `h-[48px] rounded-[12px] border-none flex items-center justify-center gap-2 bg-[#D9D9D9] hover:bg-[#D9D9D9] text-dark  shadow-none w-auto px-4 `;

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
    <div className="mt-28 flex flex-col justify-center gap-3">
      <Button onClick={() => handleSignIn("google")} className={buttonClass}>
        <Image
          src="/icons/google.svg"
          width={24}
          height={24}
          alt="Google"
          className=""
        />
        <span>Log in with Google</span>
      </Button>
      <Button className={buttonClass}>
        <Image
          src="/icons/apple.svg"
          width={24}
          height={24}
          alt="Google"
          className=""
        />
        <span>Log in with Apple</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;