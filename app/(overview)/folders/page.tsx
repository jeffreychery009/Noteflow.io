import React from "react";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Folder = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <h1>Welcome to your folders. At the moment you have no folders</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </>
  );
};

export default Folder;
