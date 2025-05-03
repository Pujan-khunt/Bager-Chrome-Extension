import React from "react";
import Footer from "./parts/Footer";
import MainArea from "./parts/MainArea";
import Navbar from "./parts/Navbar";
import { Separator } from "@/components/ui/separator";

const Popup: React.FC = () => {
  return (
    <div className="w-[380px] h-[600px] bg-black flex flex-col">
      <Navbar />
      <Separator className="bg-white" />
      <MainArea />
      <Separator className="bg-white" />
      <Footer />
    </div>
  );
};

export default Popup;
