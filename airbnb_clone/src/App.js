import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

import "./css/global.css";
import "./css/main.css";
import "./css/detail.css";
import "./css/reservation.css";
import NotFound from "./pages/NotFound";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/reservation/:id" element={<Reservation />} />
    </Routes>
  );
}

export default App;
