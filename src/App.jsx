import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"; // Footer bileşenini ekledik
import Home from "./components/home/Home"; // Home bileşenini ekledik

function App() {

  return (
    <>
      <Header />
      <Home />  {/* Ana sayfa içeriği buraya gelir */}
      <Footer />
    </>
  );
}

export default App;



