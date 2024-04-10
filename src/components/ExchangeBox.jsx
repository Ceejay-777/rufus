import React, { useEffect, useState } from 'react'
import usdtlogo from "../assets/usdtlogo.png";
import bnblogo from "../assets/bnbnewlogo.png";
import rufuslogo from "../assets/rufus.jpg";



const ExchangeBox = () => {
    const [payment, setPayment] = useState("BNB");
    const [showPayment, setShowPayment] = useState(false);
    const [receiveAmount, setReceiveAmount] = useState(0);
    const [paymentAmount, setPaymentAmount] = useState("");

    useEffect(() => {
      if (payment === "BNB") {
        setReceiveAmount(paymentAmount *28.601)
      } else setReceiveAmount(paymentAmount * 50)
    }, [paymentAmount, payment]);

  return (
    <div className="mx-6">
      <div className="rounded-3xl bg-blue-700 p-6 text-white shadow-lg mx-auto max-w-[580px]  min-w-[320px]">
        <span className="text-2xl font-semibold mb-2 grad-text">
          $RUFUS Presale:
        </span>
        <p>Price: $0.02</p>
        <p>Next Step: Launch</p>
        <div className="bg-blue-500 border-2 w-full py-4 rounded-2xl my-6 text-white flex justify-between px-8">
          <button
            className="bg-blue-700 flex items-center px-2 py-1 rounded-[30px] gap-3 hover:bg-blue-800 relative min-w-[135px]"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowPayment(true);
              }
            }}
          >
            <img
              src={payment === "BNB" ? bnblogo : usdtlogo}
              alt="bnb"
              className="w-8"
            />
            <p className=" font-semibold">{`${
              payment === "BNB" ? "BNB" : "USDT"
            }`}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
              strokeWidth="4.0"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            {showPayment && (
              <div className="absolute bg-blue-700 rounded-2xl p-4 shadow-md top-[100%] mt-2 w-max">
                <div
                  className="flex gap-6 items-center my-2 hover:bg-fadedFocus p-2  rounded-2xl justify-between"
                  onClick={() => {
                    setPayment("BNB");
                    setShowPayment(false);
                  }}
                >
                  <img src={bnblogo} alt="bnb" className="w-8" />
                  <p className=" font-semibold">BNB</p>
                </div>

                <div
                  className="flex gap-6items-center my-2 hover:bg-fadedFocus p-2  rounded-2xl justify-between"
                  onClick={() => {
                    setPayment("USDT");
                    setShowPayment(false);
                  }}
                >
                  <img src={usdtlogo} alt="bnb" className="w-8" />
                  <p className=" font-semibold">USDT</p>
                </div>
              </div>
            )}
          </button>

          <div className="flex flex-col items-center">
            <p className="fontSemibold">You pay:</p>
            <input
              type="number"
              name="paymentAmount"
              value={paymentAmount}
              min="0"
              onChange={(e) => {
                setPaymentAmount(e.target.value);
              }}
              className="focus-visible:outline-none w-16 rounded-2xl text-black px-2 py-1 bg-blue-50 text-center"
            />
          </div>
        </div>

        <div className="bg-blue-500 w-full border-2 gap-2 py-4 rounded-2xl my-6 text-white flex justify-between px-4">
          <button className="bg-blue-700 flex items-center p-2 px-4 rounded-[30px] gap-6 min-w-[135px]">
            <img src={rufuslogo} alt="rufus" className="w-8 rounded-full" />
            <p className=" font-semibold">Rufus</p>
          </button>
          <div className="flex flex-col items-center">
            <p className="fontSemibold">You receive:</p>
            <div className="w-24 rounded-2xl text-black px-2 py-1 bg-blue-50 text-center overflow-hidden">
              {receiveAmount ? receiveAmount : 0}
            </div>
          </div>
        </div>

        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0x43eA496448e730412eDc29f73DcD75A15dDA257B"
          target="_blank"
        >
          <button className="bg-blue-500 py-2 px-4 rounded-3xl font-semibold mx-auto block k hover:scale-110 shadow-md">
            Buy $RUFUS now
          </button>
        </a>
        <p className="text-xs text-slate-400 my-6">
          Website audited and protected with 256-bit SSL by Cloudflare.
        </p>
      </div>
    </div>
  );
}

export default ExchangeBox
