import rufuslogo from "../assets/rufus.jpg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Mycountdown from "../components/Mycountdown";
import ExchangeBox from "../components/ExchangeBox";
import BackCover from "../components/BackCover";

function Presale() {
  return (
    <div className="">
      <nav className="h-24 p-4 px-6 bg-blue-900 fixed top-0 left-0 w-screen flex justify-between items-center z-50 min-w-[375px]">
        <img src={rufuslogo} alt="RUFUS" className="rounded-full h-full" />

        <ConnectButton
          accountStatus="address"
          chainStatus="icon"
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </nav>
      <BackCover />

      <div className="md:flex md:justify-center md:flex-row-reverse md:items-center mb-32 bg-blue-900 mt-[96px] py-8 md:px-8">
        <ExchangeBox />
        <section className="py-12 px-6 ">
          <Mycountdown />
          <div>
            <h2 className="text-white text-3xl text-center font-bold mb-4">
              Claim your <span className="text-blue-200">$RUFUS</span>
            </h2>
            <button className="bg-blue-500 py-2 px-6 rounded-3xl font-semibold mx-auto block hover:scale-110 shadow-md text-white">
              See your claimable $RUFUS
            </button>
          </div>
        </section>
      </div>

      <div className="bg-blue-900 mb-32 py-12">
        <section className="my-12 mx-auto md:text-left max-w-[620px] px-6">
          <div>
            <h1 className="text-center text-6xl font-bold text-white leading-[78px]">
              Buy <span className="text-blue-200">Rufus The Dog</span> now, The
              dog lover memecoin
            </h1>
            <p className="text-blue-100 text-xl text-center leading-relaxed my-6">
              Introducing Rufus The Dog Coin (
              <span className="text-blue-200">$RUFUS</span>), a meme
              cryptocurrency fueled by passion for dogs and the vibrant culture
              of the crypto world. Join us on an exciting journey where fun
              meets finance!
            </p>
            <button className="bg-blue-500 py-2 px-6 rounded-3xl font-semibold mx-auto block hover:scale-110 shadow-md text-white">
              WHITEPAPER
            </button>
          </div>
        </section>
      </div>

      <footer className="bg-blue-950 font-semibold text-white text-xs text-center py-6 px-2 leading-snug">
        <div className="max-w-[600px] mx-auto">
          <h3 className="my-6 text-xl font-bold">DISCLAIMER</h3>
          <p className="mb-4">
            Please review this legal disclaimer carefully. Seek professional
            advice for any doubt. The information provided is not exhaustive and
            doesn't constitute part of a contractual agreement. While we strive
            for accuracy, the information, services, and timelines are subject
            to change without notice. This disclaimer doesn't obligate anyone to
            enter a contract or binding commitment. By using this information,
            you acknowledge that it doesn't contravene applicable laws,
            regulatory requirements, or regulations. Cryptocurrency may be
            unregulated in your jurisdiction. The value of cryptocurrencies may
            fluctuate. Profits may be subject to capital gains or other taxes
            applicable in your jurisdiction.
          </p>
          <p>© 2023 Rufus The Dog Coin. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Presale;
