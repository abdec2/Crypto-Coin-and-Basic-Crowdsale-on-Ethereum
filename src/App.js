import HeaderComponent from "./components/Header";
import Presale from "./components/Presale";
import ShapeDivider from "./components/ShapeDivider";
import { useEffect } from "react";
import { GlobalProvider } from "./context/GlobalContext";

function App() {

  useEffect(() => {
    if(!window.ethereum && !window.ethereum.isMetaMask) {
      alert('Please install MetaMask');
    } 
  }, []);
  return (
    <GlobalProvider>
      <div className="container mx-auto">
        <HeaderComponent />
        <ShapeDivider />
        <Presale />
      </div>
    </GlobalProvider>
  );
}

export default App;
