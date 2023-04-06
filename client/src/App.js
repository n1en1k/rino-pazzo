import { BrowserRouter, Routes, Route } from "react-router-dom";
import Etusivu from "./pages/Etusivu";
import Ruokalista from "./pages/Ruokalista";
import Yhteystiedot from "./pages/Yhteystiedot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Etusivu />} />
          <Route path="/ruokalista" exact element={<Ruokalista />} />
          <Route path="/yhteystiedot" exact element={<Yhteystiedot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
