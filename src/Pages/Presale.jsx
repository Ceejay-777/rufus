import { ConnectButton } from "@rainbow-me/rainbowkit";
import Mycountdown from "../components/Mycountdown";
import ExchangeBox from "../components/ExchangeBox";
import { useNavigate } from "react-router-dom";

function Presale() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mt-[152px] md:mt-[168px] flex justify-center bg-black pt-8">
        <ConnectButton
          accountStatus="address"
          chainStatus="icon"
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </div>
      <div className="md:flex md:justify-center md:flex-row-reverse md:items-center mb-32 bg-black  py-8 md:px-8 ">
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

      <div className="bg-black mb-32 py-12">
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
            <button className="bg-blue-500 py-2 px-6 rounded-3xl font-semibold mx-auto block hover:scale-110 shadow-md text-white" onClick={() => navigate("/whitepaper")}>
              WHITEPAPER
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Presale;
