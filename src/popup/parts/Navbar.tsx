import { PlusIcon, SettingsIcon } from "lucide-react";
import React from "react";
import ThemeToggle from "../components/navbar/ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-[#1a1a1a] h-16 flex px-4 items-center">
      {/* "Bager" Text - Left */}
      <p className="grow text-white font-extrabold text-2xl">Bager</p>

      {/* Utility Buttons - Right */}
      <div className="flex gap-x-3 items-center text-white">
        <div className="p-1 border-2 border-transparent hover:border-gray-600 hover:rounded-md box-border transition-all duration-150">
          <PlusIcon cursor="pointer" />
        </div>
        <ThemeToggle />
        <div className="p-1 border-2 border-transparent hover:border-gray-600 hover:rounded-md box-border transition-all duration-150">
          <SettingsIcon cursor="pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
