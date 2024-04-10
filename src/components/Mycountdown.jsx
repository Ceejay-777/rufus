import React, { useEffect, useState } from "react";

const Mycountdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const targetDate = new Date("2024-04-20T00:00:00Z");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = new Date(targetDate) - now;
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((diff / (1000 * 60)) % 60));
      setSeconds(Math.floor((diff / 1000) % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-white text-center font-bold text-2xl mb-8 bg-blue-700 shadow-md  rounded-2xl p-4 max-w-[500px] mx-auto">
      <h4 className="mb-4">Market Launch:</h4>
      <div className="flex gap-2  w-fit items-center text-white text-xl font-bold mx-auto">
        <div className=" p-2 rounded-2xl bg-blue-400 w-12 h-16 items-center flex flex-col">
          {days ? days.toString().padStart(2, "0") : "00"}
          <span className="text-sm font-light">days</span>
        </div>
        <span>:</span>
        <div className=" p-2 rounded-xl bg-blue-400 w-12 h-16 items-center flex flex-col">
          {hours ? hours.toString().padStart(2, "0") : "00"}
          <span className="text-sm font-light">hrs</span>
        </div>
        <span>:</span>
        <div className=" p-2 rounded-xl bg-blue-400 w-12 h-16 items-center flex flex-col">
          {minutes ? minutes.toString().padStart(2, "0") : "00"}
          <span className="text-sm font-light">mins</span>
        </div>
        <span>:</span>
        <div className=" p-2 rounded-xl bg-blue-400 w-12 h-16 items-center flex flex-col">
          {seconds ? seconds.toString().padStart(2, "0") : "00"}
          <span className="text-sm font-light">secs</span>
        </div>
      </div>
      
      <div className="text-sm mt-4 font-semibold">
        <p>Listing price: $0.02</p>
        <p>Next Step: Launch</p>
      </div>
      <p className="text-sm text-left font-semibold mt-6 mb-2 w-[90%] mx-auto">
        <span className="text-yellow-300">000</span>BNB of{" "}
        <span className="text-yellow-300">864</span>BNB
      </p>
      <div className="h-4 mb-6 rounded-full w-[90%] border-2 border-blue-300 mx-auto">
        <div className="h-full rounded-full bg-yellow-300 w-[80%]"></div>
      </div>
      <p className="text-slate-300 text-xs font-light">
        Website audited and protected with 256-bit SSL
      </p>
    </div>
  );
};

export default Mycountdown;
