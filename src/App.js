import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import SafesPage from "./pages/SafesPage/SafesPage";
import VaultPage from "./pages/VaultPage/VaultPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import IamPage from "./pages/IamPage/IamPage";
import AzurePage from "./pages/AzurePage/AzurePage";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
      <Route index path="/safes" element={<SafesPage/>}>
        </Route>
        <Route path="/vault" element={<VaultPage/>}>
        </Route>
        <Route path="/service" element={<ServicePage />}>
        </Route>
        <Route path="/iam" element={<IamPage />}>
        </Route>
        <Route path="/azure" element={<AzurePage />}>
        </Route>
        <Route path="/" element={<Navigate to="/safes"/>}>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
