import { BrowserRouter, Routes, Route } from "react-router-dom";
import Etusivu from "./pages/Etusivu";
import Ruokalista from "./pages/Ruokalista";
import Yhteystiedot from "./pages/Yhteystiedot";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SubFeat from "./components/SubFeat/SubFeat";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <SubFeat />
        <Routes>
          <Route path="/" exact element={<Etusivu />} />
          <Route path="/ruokalista" exact element={<Ruokalista />} />
          <Route path="/yhteystiedot" exact element={<Yhteystiedot />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
