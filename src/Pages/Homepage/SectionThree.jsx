import React from 'react'

const SectionThree = () => {
  return (
    <section className="bg-black px-6 text-white py-12 text-center mb-32">
      <p className="text-lg text-blue-200">Join the revolution now</p>
      <h4 className="text-5xl font-semibold mb-6 leading-[60px]">
        Buy safely, easily, and quickly in just 3 steps
      </h4>

      <div className=" bg-blue-700 rounded-2xl my-6 text-center p-6">
        <div className="font-bold text-blue-900 p-2 bg-white rounded-full text-2xl w-12 h-12 mx-auto animate-pulse mb-4">
          1
        </div>
        <h5 className="text-2xl font-bold mb-2">Connect Wallet</h5>
        <p>
          Connect your preferred decentralized wallet, whether it's MetaMask or
          another, in a completely secure and easy way.
        </p>
      </div>
      <div className=" bg-blue-700 rounded-2xl my-6 text-center p-6">
        <div className="font-bold text-blue-900 p-2 bg-white rounded-full text-2xl w-12 h-12 mx-auto animate-pulse mb-4">
          2
        </div>
        <h5 className="text-2xl font-bold mb-2">Choose Amount</h5>
        <p>
          Select how much you want to buy using BNB or USDT on the BEP20
          network. Have BNB for gas!
        </p>
      </div>
      <div className=" bg-blue-700 rounded-2xl my-6 text-center p-6">
        <div className="font-bold text-blue-900 p-2 bg-white rounded-full text-2xl w-12 h-12 mx-auto animate-pulse mb-4">
          3
        </div>
        <h5 className="text-2xl font-bold mb-2">Get $RUFUS</h5>
        <p>
          Connect your preferred decentralized wallet, whether it's MetaMask or
          another, in a completely secure and easy way.
        </p>
      </div>

      <button className="py-2 px-4 text-black font-bold bg-blue-200 rounded-full my-4 hover:scale-110">
        Buy Now 🔥
      </button>

      <p className="text-xs text-slate-300">
        Remember to buy cryptocurrencies at your own risk. They may not be
        regulated in your jurisdiction. Keep your assets safe!
      </p>

    </section>
  );
}

export default SectionThree
