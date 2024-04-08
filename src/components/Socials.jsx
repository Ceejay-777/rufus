import React from 'react'
import twitter from "../assets/Xlogo.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";

const Socials = () => {
  return (
    <div className="flex gap-3 justify-center">
      <div className="rounded-lg bg-blue-300 p-2 w-fit hover:scale-110">
        <img src={twitter} alt="Twitter" className="w-6 h-6" />
      </div>
      <div className="rounded-lg bg-blue-300 p-2 w-fit hover:scale-110">
        <img src={telegram} alt="Twitter" className="w-6 h-6" />
      </div>
      <div className="rounded-lg bg-blue-300 p-2 w-fit hover:scale-110">
        <img src={instagram} alt="Twitter" className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Socials
