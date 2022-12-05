import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";

import "./css/global.css";
import "./css/main.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
