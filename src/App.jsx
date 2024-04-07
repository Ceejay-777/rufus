import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import InfoOverlay from "./components/InfoOverlay.jsx";
import SectionOne from "./Pages/Homepage/SectionOne.jsx";

function App() {
  return (
    <div>
      <NavBar />
      {/* <InfoOverlay /> */}
      <SectionOne />
    </div>
  );
}

export default App;
