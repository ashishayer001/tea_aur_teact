import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white  rounded-3xl px-2 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-3 py-1 rounded-full to-black"
              style={{ background: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-3 py-1 rounded-full text-white"
              style={{ background: "green" }}
            >
              {" "}
              green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-3 py-1 rounded-full text-white"
              style={{ background: "yellow" }}
            >
              {" "}
              yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-3 py-1 rounded-full text-white"
              style={{ background: "blue" }}
            >
              {" "}
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
