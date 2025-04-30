import React from "react";
import Footer from "./parts/Footer";
import Main from "./parts/Main";
import Navbar from "./parts/Navbar";
import { Separator } from "@/components/ui/separator";

const Popup: React.FC = () => {
  return (
    <div className="w-[380px] h-[600px] bg-black relative">
      <Navbar />
      <Separator />
      <Main />
      <Footer />
    </div>
  );
};

export default Popup;
