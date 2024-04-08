import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import InfoOverlay from "./components/InfoOverlay.jsx";
import SectionOne from "./Pages/Homepage/SectionOne.jsx";
import SectionTwo from "./Pages/Homepage/SectionTwo.jsx";
import SectionThree from "./Pages/Homepage/SectionThree.jsx";
import SectionFour from "./Pages/Homepage/SectionFour.jsx";

function App() {
  return (
    <div>
      <NavBar />
      {/* <InfoOverlay /> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
