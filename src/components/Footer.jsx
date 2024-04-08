import React from "react";
import rufus from "../assets/rufus.jpg";
import SectionSix from "../Pages/Homepage/SectionSix";

const Footer = () => {
  return (
    <footer className="bg-black text-center">
      <SectionSix />
      <div className="max-w-[800px] mx-auto p-6">
        <img
          src={rufus}
          alt="RUFUS"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <p className="font-semibold text-blue-700 text-xs mb-2">
          © RUFUSTheDog. All Right Reserved.
        </p>
        <p className="text-white font-extralight text-[10px]">
          Please review this legal disclaimer carefully. Seek professional
          advice for any doubt. The information provided is not exhaustive and
          doesn't constitute part of a contractual agreement. While we strive
          for accuracy, the information, services, and timelines are subject to
          change without notice. This disclaimer doesn't obligate anyone to
          enter a contract or binding commitment. By using this information, you
          acknowledge that it doesn't contravene applicable laws, regulatory
          requirements, or regulations. Cryptocurrency may be unregulated in
          your jurisdiction. The value of cryptocurrencies may fluctuate.
          Profits may be subject to capital gains or other taxes applicable in
          your jurisdiction.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
