import React from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <main className="flex justify-center p-6">
      <div className="mt-36">
        <h1 className="h2-semibold mb-7 text-center">{title}</h1>
        <div className="w-[376px] rounded-[20px] border-none bg-light-100 p-4">
          <div className="mb-24 flex flex-col items-center px-3 py-[52px]">
            {children}
          </div>
          <div>
            <SocialAuthForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
