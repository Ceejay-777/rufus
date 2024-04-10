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
      <a href="https://bscscan.com/address/0x43eA496448e730412eDc29f73DcD75A15dDA257B" target="_blank">
        <button className="bg-blue-300 py-2 px-4 rounded-[20px] font-semibold hover:scale-110 text-black">
          Smart Contract
        </button>
      </a>
      <Socials />
    </div>
  );
};

export default MiniNav;
