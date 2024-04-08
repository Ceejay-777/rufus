import React from "react";
import Socials from "../../components/Socials";

const SectionSix = () => {
  return (
    <section className="bg-blue-900 p-6 text-white text-center">
      <div className="max-w-[600px] mx-auto">
        <p className="text-blue-200">To the Moon 🚀</p>
        <h4 className="text-5xl leading-[50px] font-bold my-4">
          Join our community
        </h4>
        <p className="mb-6">
          Become part of the vibrant <span className="text-blue-200">$RUFUS</span>{" "}
          community and engage with like-minded individuals who share a passion
          for crypto, dogs, and meme culture.
        </p>
        {/* <button className="py-2 px-4 bg-blue-200 rounded-full text-lg font-bold text-black mb-4 hover:scale-110 mt-4">
          Team 🔥
        </button> */}
        <Socials />
      </div>
    </section>
  );
};

export default SectionSix;
