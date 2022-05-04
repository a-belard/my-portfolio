import { Resizable } from "re-resizable";
import React from "react";

export default function SideNav() {
  return (
    <Resizable
      defaultSize={{ width: "52px" }}
      maxWidth={"52px"}
      minWidth={"52px"}
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
      className="h-full border-right flex py-3 items-center flex-col gap-3 text-md"
    >
      {/* <i class="ri-file-2-fill secondary-white opacity-75"></i> */}
      <i className="ri-terminal-box-fill secondary-1 opacity-75 cursor-pointer hover:opacity-100"></i>
      <i className="ri-user-4-fill secondary-white opacity-75 cursor-pointer"></i>
      <i className="ri-gamepad-fill secondary-1 opacity-75 cursor-pointer hover:opacity-100"></i>
    </Resizable>
    // <section className="w-12 bg-yellow-400 h-full overflow-hidden resize block">
    //   Hello
    // </section>
  );
}
