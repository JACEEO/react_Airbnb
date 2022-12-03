import Banner from "./components/Banner";
import MainBody from "./components/MainBody";
import Nav from "./components/Nav";
import "./css/global.css";
import "./css/main.css";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <MainBody />
    </div>
  );
}

export default App;
