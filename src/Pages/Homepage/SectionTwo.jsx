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
              <span className="text-blue-200">$RUFUS</span>: A space dog ready
              to hit the moon
            </h4>
            <p>
              Dive into RUFUS The Dog, enjoy web3 decentralization, where each
              member has the same power of choice, freedom, and justice. We aim
              to transform perspectives by offering greater decision-making
              power to our community.
            </p>
          </div>
        </div>

        <div className="md:flex flex-wrap gap-8">
          <div className="bg-blue-700 rounded-2xl my-8 text-center p-6 max-w-[420px] mx-auto">
            <h5 className="text-2xl font-bold mb-4">A Legend Starts</h5>
            <p>
              The legend began with a dog named{" "}
              <span className="text-blue-200">$Rufus</span>. This was no
              ordinary canine; He was a space dog with big dreams.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl my-6 text-center p-6 max-w-[420px] mx-auto">
            <h5 className="text-2xl font-bold mb-4">Exploration</h5>
            <p>
              His silver fur was shining under the starlight as he explored the
              vastness of the cosmos.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl my-6 text-center p-6 max-w-[420px] mx-auto">
            <h5 className="text-2xl font-bold mb-4">
              <span className="text-blue-200">$RUFUS</span> Goal
            </h5>
            <p>
              But <span className="text-blue-200">$Rufus</span> wasn't satisfied
              with simply wandering the galaxy. He had only one goal: to reach
              the moon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
