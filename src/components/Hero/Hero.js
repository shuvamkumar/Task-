import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Modal from "../Modal";

function Hero() {
  return (
    <>
      <div className="hero">
        <LeftSection />
        <RightSection />
      </div>
    </>
  );
}

export default Hero;
