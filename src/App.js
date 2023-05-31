import {useState, useEffect} from "react"
import useMediaQuerry from "./hooks/useMediaQuerry"
import Navbar from "./Navbar";
import DotGroup from "./DotGroup";
import Landing from "./Landing";
import Footer from "./Footer";
import MySkills from "./MySkils";
import Contact from "./Contact";
import Projects from "./Projects";
import LineGradient from "./LineGradient";
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
  <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
           <MySkills />
        </motion.div>
  </div>
  <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
