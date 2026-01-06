import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Index";
import Menu from "./Components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Menu/>
      
    </>
  );
}

export default App;
