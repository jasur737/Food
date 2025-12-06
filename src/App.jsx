import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
