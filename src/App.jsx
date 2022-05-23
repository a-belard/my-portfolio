import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
  window.oncontextmenu = function () {
    return false;
  };

  document.addEventListener(
    "keydown",
    function (event) {
      var key = event.key || event.keyCode;

      if (key == 123) {
        return false;
      } else if (
        (event.ctrlKey && event.shiftKey && key == 73) ||
        (event.ctrlKey && event.shiftKey && key == 74)
      ) {
        return false;
      }
    },
    false
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
