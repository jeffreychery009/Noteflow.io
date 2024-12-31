import React from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="min-w-[376px] space-y-6 rounded-[10px] border border-gray-200 bg-[#FAFAFA] px-4 py-10 shadow-sm sm:min-w-[500px] sm:px-8">
        <div className="">
          <h1 className="h2-semibold mb-4 tracking-tight">
            Welcome to Noteflow
          </h1>
        </div>
        {children}
        <div>
          <SocialAuthForm />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
