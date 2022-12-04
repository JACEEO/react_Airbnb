import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Nav from "./components/Nav";
import "./css/global.css";
import "./css/main.css";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Category />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
