import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Cliente from "./pages/Cliente";
import Productos from "./pages/Productos";
import Provedores from "./pages/Provedores";
import NoPage from "./pages/NoPage";

function App() {
  return (
<>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="Cliente" element={<Cliente />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="Provedores" element={<Provedores />} />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
</>
  );
}

export default App;
