import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-0 inset-x-0 p-8">
          <div className="flex flex-wrap bg-white p-3 justify-center gap-3 rounded-2xl">
            <button
              className="bg-red-600 outline-none px-5 py-2 text-white rounded-full"
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="bg-green-600 outline-none px-5 py-2 text-white rounded-full"
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="bg-blue-600 outline-none px-5 py-2 text-white rounded-full"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="bg-yellow-500 outline-none px-5 py-2 text-white rounded-full"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>

            <button
              className="bg-indigo-600 outline-none px-5 py-2 text-white rounded-full"
              onClick={() => setColor("indigo")}
            >
              Indigo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
