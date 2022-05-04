import React from "react";
import CodeSnippets from "./CodeSnippets";
import Editor from "./Editor";
import MainNav from "./MainNav";
import SideNav from "./SideNav";

export default function () {
  return (
    <main className="flex w-full h-full">
      <SideNav />
      <MainNav />
      <Editor />
      <CodeSnippets />
    </main>
  );
}
