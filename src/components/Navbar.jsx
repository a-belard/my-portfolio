import React from "react";
import { my_data } from "../data";
import { navlinks } from "../data/navlinks";
import "../styles/navbar.scss";

export default function () {
  let active = 0;
  return (
    <nav className=" flex justify-between px-10 h-12 items-center text-xs secondary-1 primary-bg-2 font-bold">
      <div className="flex gap-10 h-full">
        <button>_{my_data.firstName}</button>
        <div className=" flex ml-20 h-full">
          {navlinks &&
            navlinks.map((navlink, i) => (
              <button
                key={i}
                className={
                  (i === active ? "navlink-active" : "") +
                  " h-full px-8 navlink"
                }
              >
                _{navlink}
              </button>
            ))}
        </div>
      </div>
      <div>
        <button>_contact-me</button>
      </div>
    </nav>
  );
}
