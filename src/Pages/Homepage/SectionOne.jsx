import React from "react";

const SectionOne = () => {
  return (
    <section className="bg-black ">
      <div className="text-white p-4 text-center roundbottom pb-10 mb-32 max-w-[600px] mx-auto">
        <h1 className="text-6xl font-bold mb-6 leading-[70px]">
          <span className="text-blue-200">RUFUS The Dog</span>: The ultimate dog
          lover Finance project.
        </h1>
        <p className="mb-6">
          Introducing <span className="font-bold">Rufus The Dog Coin</span> (<span className="text-blue-200">$RUFUS</span>), a meme cryptocurrency fueled
          by passion for dogs and the vibrant culture of the crypto world. Join
          us on an exciting journey where fun meets finance!
        </p>
        <p className="font-semibold mb-4">
          CA: 0x7782CE8928bccd27089730912397DF89129
        </p>
        <button className="px-4 py-2 my-2 bg-blue-200 font-bold rounded-full block mx-auto text-black hover:scale-110">
          Chart 🚀
        </button>
        <button className="px-4 py-2 my-2 bg-blue-200 font-bold rounded-full text-black hover:scale-110">
          Buy $RUFUS Pancakeswap
        </button>
        <div className="flex gap-2 justify-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
          <p>Project verified</p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
