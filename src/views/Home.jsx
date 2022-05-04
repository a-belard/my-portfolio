import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Welcome from "./Welcome";
import "remixicon/fonts/remixicon.css";
import AboutMe from "./AboutMe.jsx/AboutMe";

const subViews = [<Welcome />, <AboutMe />];

export default function Home() {
  const active = useSelector((store) => store.navigation);
  return (
    <div className="md:h-screen flex flex-col gap-0">
      <Navbar />
      {subViews[active]}
      <Footer />
    </div>
  );
}
