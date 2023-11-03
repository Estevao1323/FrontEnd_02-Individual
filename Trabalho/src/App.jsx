import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
      </Routes>
    </>
  );
}

export default App;
