import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";

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
