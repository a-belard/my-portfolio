import { Resizable } from "re-resizable";
import React from "react";

export default function Editor() {
  return (
    <Resizable
      className="h-full border-right"
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
      Editor
    </Resizable>
  );
}
