import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Menu2 from "./Pages/Menu/Index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Menu2" element={<Menu2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
