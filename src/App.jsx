import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Menu2 from "./Pages/Menu/Index";
import Info from "./Pages/Info/Index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Menu2" element={<Menu2/>} />
        <Route path="/Menu2/Info" element={<Info/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
