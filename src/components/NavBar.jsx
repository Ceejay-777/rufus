import React, { useEffect, useState, useRef } from "react";
import rufuslogo from "../assets/rufus.jpg";
import InfoOverlay from "./InfoOverlay";
import MiniNav from "./MiniNav";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const infoOpenRef = useRef(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const infoRef = useRef();
  useEffect(() => {
    const handleCLose = (event) => {
      console.log(infoOpenRef.current);
      if (
        infoOpenRef.current &&
        event.target !== infoRef.current &&
        !infoRef.current.contains(event.currentTarget)
      ) {
        setInfoOpen(false);
      }
    };

    document.body.addEventListener("click", handleCLose);

    return () => removeEventListener("click", handleCLose);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-screen min-h-[136px] z-50">
      <div className="bg-black py-4 px-2 text-white md:px-6">
        <div className="flex items-center justify-between mb-4 mx-auto max-w-[500px]">
          <div className="relative md:hidden">
            <div
              className="bg-blue-500 p-2 rounded-full hover:scale-110"
              onClick={() => {
                if (!infoOpen) {
                  console.log("Closed");
                  setInfoOpen(true);
                  infoOpenRef.current = true;
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <InfoOverlay open={infoOpen} inforef={infoRef} />
          </div>
          <div className="flex justify-center gap-2 items-center">
            <img
              src={rufuslogo}
              alt="Rufus"
              className="w-12 rounded-full h-12 md:w-16 md:h-16"
            />
          </div>
          <button className="bg-blue-500 py-2 px-4 rounded-full font-semibold hover:scale-110">
            Buy $RUFUS
          </button>
        </div>
        <div className="flex justify-around w-9/10 mx-auto py-2 items-center max-w-[750px]">
          <button className="bg-blue-300 py-2 px-4 rounded-full font-semibold hover:scale-110 text-black">
            Claim Presale
          </button>
          <button className="bg-blue-300 py-2 px-4 rounded-full font-semibold hover:scale-110 text-black">
            Audit
          </button>
          <MiniNav />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
