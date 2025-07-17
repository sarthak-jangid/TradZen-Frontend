import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
}
