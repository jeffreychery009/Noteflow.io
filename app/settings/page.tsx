"use client";

import React from "react";

import Card from "@/components/cards/Cards";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { Switch } from "@/components/ui/switch";
import { settingsDescription, settingsSec, settingsSync } from "@/constants";

const Settings = () => {
  const buttonClass = `h-[60px] border-[0.5px] border-dark-800 shadow-none dark:border-dark-700 dark:text-white`;
  return (
    <>
      <main className="p-8">
        <div className="flex justify-between">
          <h2 className="h2-bold">Settings</h2>
          <MobileNavigation />
        </div>
        <div className="mt-10">
          <h2 className="h2-semibold">Notifications</h2>
        </div>
        <div className="mt-3 flex flex-col gap-5">
          {settingsDescription.map((settings) => (
            <div key={settings.id}>
              <Card>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="base-semibold">{settings.subTitle}</h3>
                    <p className="text-dark-600">{settings.message}</p>
                  </div>
                  <div className="flex items-center">
                    <Switch />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <Divider />
        <div className="mt-10">
          <h2 className="h2-semibold">Sync</h2>
        </div>
        <div className="mt-3">
          {settingsSync.map((settings) => (
            <div key={settings.id}>
              <Card>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="base-semibold">{settings.subTitle}</h3>
                    <p className="text-dark-600">{settings.message}</p>
                  </div>
                  <div className="flex items-center">
                    <Switch />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <Divider />
        <div className="mt-10">
          <h2 className="h2-semibold">Security</h2>
        </div>
        <div className="mt-3">
          {settingsSec.map((settings) => (
            <div key={settings.id}>
              <Card>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="base-semibold">{settings.subTitle}</h3>
                    <p className="text-dark-600">{settings.message}</p>
                  </div>
                  <div className="flex items-center">
                    <Switch />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <Divider />
        <div className="mt-10">
          <h2 className="h2-semibold">Logout/Delete Account</h2>
        </div>
        <div className="mt-3 flex flex-col gap-6">
          <Button
            className={`${buttonClass} dark: bg-white text-black dark:bg-dark-900`}
          >
            Log out
          </Button>
          <Button className={` ${buttonClass} danger-gradient`}>
            Delete Account
          </Button>
        </div>
      </main>
    </>
  );
};

export default Settings;
