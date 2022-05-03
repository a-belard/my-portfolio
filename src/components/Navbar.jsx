import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { my_data } from "../data";
import { navlinks } from "../data/navlinks";
import "../styles/navbar.scss";
import navActions from "../reducers/navigation";

export default function () {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.navigation);
  const navigateHandler = (navId) => dispatch(navActions.navigate(navId));
  return (
    <nav className=" flex justify-between px-8 h-12 items-center text-xs secondary-1 primary-bg-2 font-bold">
      <div className="flex gap-10 h-full">
        <button>_{my_data.firstName}</button>
        <div className=" flex ml-20 h-full">
          {navlinks &&
            navlinks.map((navlink, i) => (
              <button
                key={i}
                onClick={(e) => navigateHandler(i)}
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
      <div className="h-full">
        <button className="h-full contact-me-btn pl-8">_contact-me</button>
      </div>
    </nav>
  );
}
