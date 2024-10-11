import { useContext, useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./pages/HeroSection";
import { useNetwork } from "wagmi";
import { AppContext } from "./utils";
import NetworkSwitch from "./NetworkSwitch";
import FeaturedIn from "./pages/FeaturedIn";
import MBCard from "./pages/MBCard";
import Ecosystem from "./pages/Ecosystem";
import Tokenomics from "./pages/Tokenomics";
import Faqs from "./pages/Faqs";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";
import AlertBar from "./pages/AlertBar";

function App() {
  const { account } = useContext(AppContext);
  const [openNetworkSwitch, setOpenNetworkSwitch] = useState(false);
  const { chain } = useNetwork();

  useEffect(() => {
    if (account && chain && chain?.id !== 1) {
      setOpenNetworkSwitch(true);
    }
  }, [chain, account]);
  return (
    <>
      <NetworkSwitch open={openNetworkSwitch} setOpen={setOpenNetworkSwitch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AlertBar />
              <Header />
              <HeroSection />
              <FeaturedIn />
              <MBCard />
              <Ecosystem />
              <Tokenomics />
              <Faqs />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
