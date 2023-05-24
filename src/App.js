import {useState} from "react"
import useMediaQuerry from "./hooks/useMediaQuerry"
import Navbar from "./Navbar";
function App() {
  const [selectedPage, setSelectedPage]= useState('home');
  const isAboveMediumScreens= useMediaQuerry("(min-width: 1060px)");

  return (
   
    <div className="app bg-deep-blue">
<Navbar 
selectedPage={selectedPage} 
setSelectedPage={setSelectedPage}
/>
    </div>
  );
}

export default App;
