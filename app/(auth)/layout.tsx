import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <main className="flex justify-center p-6">
      <div className="mt-36">
        <h1 className="h2-semibold mb-7 text-center">{title}</h1>
        <div className="h-[322px] w-[376px] rounded-[20px] border-none bg-light-100">
          <div className="flex flex-col items-center px-3 py-[52px]">
            {children}
          </div>
        </div>
        <footer className="mt-4 text-center">
          © 2024 Noteflow. All rights reserved.
        </footer>
      </div>
    </main>
  );
};

export default AuthLayout;
