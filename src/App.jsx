import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index";
import Menu2 from "./Pages/Menu/Index";
import Info from "./Pages/Info/Index";
import UI from "./Pages/UI/Index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Menu2" element={<Menu2/>} />
        <Route path="/Menu2/Info" element={<Info/>} />
        <Route path="/UI" element={<UI/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
