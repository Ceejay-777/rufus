import React from "react";
import Socials from "./Socials";
import { useNavigate } from "react-router-dom";

const MiniNav = () => {
  const navigate = useNavigate();

  return (
    <div className="md:flex gap-4 items-center hidden">
      <button
        className="bg-blue-300 py-2 px-4 rounded-[20px] font-semibold hover:scale-110 text-black"
        onClick={() => navigate("/whitepaper")}
      >
        Whitepaper
      </button>
      <a href="https://bscscan.com/address/0xFFa93d7ADE6D32A5074fE3E561e29eCDc86A6DDb" target="_blank">
        <button className="bg-blue-300 py-2 px-4 rounded-[20px] font-semibold hover:scale-110 text-black">
          Smart Contract
        </button>
      </a>
      <Socials />
    </div>
  );
};

export default MiniNav;
