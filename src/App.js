import {useState, useEffect} from "react"
import useMediaQuerry from "./hooks/useMediaQuerry"
import Navbar from "./Navbar";
import DotGroup from "./DotGroup";
import Landing from "./Landing";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage]= useState('home');
  const[isTopOfPage, setIsTopOfPage]=useState(true)
  const isAboveMediumScreens= useMediaQuerry("(min-width: 1060px)");
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-deep-blue">
    <Navbar 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}
      
    />
  <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
    )}
  <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
  </div>
  </div>
  
)}
export default App;
