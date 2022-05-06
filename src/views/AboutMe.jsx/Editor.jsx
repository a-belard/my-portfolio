import { Resizable } from "re-resizable";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import FakeScroller from "../../components/FakeScroller";
import { my_data } from "../../data";

export default function Editor() {
  const active_persInfo_state = useSelector((state) => state.active_persInfo);
  const education_level_state = useSelector((state) => state.education_level);
  var active_panel;
  var content;
  const bioRef = useRef();
  switch (active_persInfo_state) {
    case 0:
      active_panel = "bio";
      content = (
        <p className=" h-fit" ref={bioRef}>
          <br />
          About me <br />
          {my_data.bio}
          <br />
          <span className=" invisible">--</span>
        </p>
      );
      break;
    case 1:
      active_panel = "interests";
      content = (
        <p className="h-fit" ref={bioRef}>
          <span className="secondary-3">const</span>
          <span className="accent-2"> interests</span>
          <span className="secondary-white">: </span>
          <span className="secondary-3">string</span>
          <span className="accent-3">[]</span>
          <span className="secondary-white"> = </span>
          <span className="accent-4">[</span>
          <br />
          {my_data.interests.map((interest, i) => (
            <>
              <span key={i} className="ml-7 accent-5 opacity-95">
                {" "}
                "{interest}",
              </span>
              <br />
            </>
          ))}
          <span className="accent-4">]</span>
          <span className="secondary-white">;</span>
        </p>
      );
      break;
    case 2:
      active_panel = my_data.education[education_level_state].level
        .toLowerCase()
        .split(" ")
        .join("-");
      content = (
        <p className="px-28 pt-2">
          {my_data.education[education_level_state].level
            .toLowerCase()
            .split(" ")
            .join("-")}
        </p>
      );
      break;
    default:
      active_panel = "";
  }
  const [newContent, setnewContent] = useState();
  const [comments, setcomments] = useState();
  useEffect(() => {
    let p_bio = bioRef.current;
    let p_bio_height = p_bio.offsetHeight; // 12 for padding top
    let p_bio_lineHeight = Number(
      getComputedStyle(p_bio).lineHeight.substring(0, 2)
    );
    let lines = Math.ceil(p_bio_height / p_bio_lineHeight);
    setnewContent(
      <p className="w-4 h-full mr-7">
        {[...Array(lines).keys()].map((number, i) => (
          <span key={i}>{number + 1} </span>
        ))}
      </p>
    );
    if (active_panel === "bio") {
      setcomments(
        <p className="h-full mr-1.5">
          <span>/**</span>
          <br />
          {[...Array(lines - 2).keys()].map((number, i) => (
            <>
              <span key={i}>&nbsp;*&nbsp;</span>
              <br />
            </>
          ))}
          <span>&nbsp;*/</span>
        </p>
      );
    }
    console.log("changed");
    return () => {};
  }, [active_panel, bioRef.current]);
  return (
    <Resizable
      className="h-full border-right text-sm secondary-1 flex flex-col gap-0"
      defaultSize={{ width: "41.666667%" }}
      minWidth={"39%"}
      maxWidth={"60%"}
      enable={{
        top: false,
        topLeft: false,
        left: false,
        right: true,
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        topRight: false,
      }}
    >
      <div className="w-full border-bottom h-11 flex">
        <button className="flex h-full justify-center px-3 items-center border-right hover:bg-transparent hover:o">
          <span>{active_panel}.tsx</span>
          <i className="ri-close-fill ml-14"></i>
        </button>
      </div>
      <div className="w-full flex flex-1 justify-between">
        <div className="px-8 pr-0 pt-3 w-11/12 flex">
          {newContent}
          {active_panel === "bio" && comments}
          {content}
        </div>
        <FakeScroller />
      </div>
    </Resizable>
  );
}
