import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

import "./css/global.css";
import "./css/main.css";
import "./css/detail.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
