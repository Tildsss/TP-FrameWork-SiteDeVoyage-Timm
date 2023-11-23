import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import SecondeButton from "./components/button/MainButton.jsx";

function App() {
  return (
    <>
      <div className="MainDiv">
        <Header />
        <SecondeButton ImgProfil="./components/asset/image/ProfilTest.png" />
        <h1 className="Title">TRIPDAY</h1>
        <div className="rectangle"></div>
        <Footer />
      </div>
      <div className="test">
        <p className="test1">qsfqqqqqqqqqqq</p>
      </div>
    </>
  );
}

export default App;
