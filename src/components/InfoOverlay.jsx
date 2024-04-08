import React from "react";
import { useNavigate } from "react-router-dom";
import Socials from "./Socials";

const InfoOverlay = ({open, inforef}) => {
  const navigate = useNavigate()
  return (
    <div
      className={`w-[80vw] p-3 shadow-md rounded-2xl bg-white text-black absolute top-[100%] mt-4 ${
        open || "hidden"
      } max-w-[580px]`}
      ref={inforef}
    >
      <h2 className="text-xl font-bold mb-2">
        Find all the information about{" "}
        <span className="text-blue-200">$RUFUS The Dog</span> below 👇
      </h2>
      <p className="text-sm mb-2">
        All the foundations of the project and the most relevant information
        about it will be provided. Over time, new information will be added. 🔥
      </p>

      <div className="bg-blue-300 p-2 rounded-xl mb-2  hover:bg-blue-200 max-w-[400px]" onClick={() => navigate("/whitepaper")}>
        <h4 className="font-bold">Whitepaper</h4>
        <p className="text-sm">
          Complete information on the foundations of the project.
        </p>
      </div>

      {/* <div className="bg-blue-300 p-2 rounded-xl mb-2 hover:bg-blue-200">
        <h4 className="font-bold">Announcements</h4>
        <p className="text-sm">
          See the latest changes and important announcements about $RUFUS THE
          DOG.
        </p>
      </div> */}

      <button className="bg-blue-300 py-2 px-4 rounded-[20px] font-semibold hover:scale-110 text-black">
        Smart Contract
      </button>

      <Socials />
    </div>
  );
};

export default InfoOverlay;
