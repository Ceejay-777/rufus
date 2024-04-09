import React from "react";

const TopContainer = ({ setInfoOpen, setChatOpen }) => {
  return (
    <div
      className="w-screen h-screen fixed z-30 top-0"
      onClick={() => {
        setInfoOpen(false);
        setChatOpen(false);
      }}
    ></div>
  );
};

export default TopContainer;
