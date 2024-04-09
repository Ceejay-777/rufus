import React from "react";
import { useNavigate } from "react-router-dom";
import Socials from "./Socials";

const InfoOverlay = ({ open, inforef }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-[80vw] p-3 shadow-md rounded-2xl bg-white text-black absolute top-[100%] mt-4 ${
        open || "hidden"
      } max-w-[580px] z-50`}
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

      <div
        className="bg-blue-300 p-2 rounded-xl mb-2  hover:bg-blue-200 max-w-[400px]"
        onClick={() => navigate("/whitepaper")}
      >
        <h4 className="font-bold">Whitepaper</h4>
        <p className="text-sm">
          Complete information on the foundations of the project.
        </p>
      </div>
      <a
        href="https://bscscan.com/address/0xFFa93d7ADE6D32A5074fE3E561e29eCDc86A6DDb"
        target="_blank"
      >
        <button className="bg-blue-300 py-2 px-4 rounded-[20px] font-semibold hover:scale-110 text-black mb-4">
          Smart Contract
        </button>
      </a>

      <Socials />
    </div>
  );
};

export default InfoOverlay;
