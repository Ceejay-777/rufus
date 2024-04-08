import React from "react";
import rufus from "../../assets/rufus.jpg";

const SectionTwo = () => {
  return (
    <section className="bg-black">
      <div className=" p-4 pt-12 text-white text-center mb-32">
        <div>
          <div className="max-w-[600px] mx-auto">
            <img
              src={rufus}
              alt="RUFUS"
              className="w-20 h-20 rounded-full animate-bounce block mx-auto z-30"
            />
            <p className="text-center text-blue-200 text-lg mb-4">
              A vibrant decentralized community
            </p>
            <h4 className="text-5xl font-semibold mb-6 leading-[50px]">
              <span className="text-blue-200">$RUFUS</span>: Built by the
              people, for the people
            </h4>
            <p>
              Dive into RUFUS The Dog, enjoy web3 decentralization, where each
              member has the same power of choice, freedom, and justice. We aim
              to transform perspectives by offering greater decision-making
              power to our community.
            </p>
          </div>
        </div>

        <div className="md:flex flex-wrap gap-8 justify-center">
          <div className="bg-blue-700 rounded-2xl my-6 text-center p-6 max-w-[420px]">
            <h5 className="text-2xl font-bold mb-4">LOREM IPSUM</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo, maxime id laudantium hic temporibus.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl my-6 text-center p-6 max-w-[420px]">
            <h5 className="text-2xl font-bold mb-4">LOREM IPSUM</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo, maxime id laudantium hic temporibus.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl my-6 text-center p-6 max-w-[420px]">
            <h5 className="text-2xl font-bold mb-4">LOREM IPSUM</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo, maxime id laudantium hic temporibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
