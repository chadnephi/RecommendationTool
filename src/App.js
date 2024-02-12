import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CashFlow from "./Screens/CashFlow";
import Debt from "./Screens/Debt";
import EmergencyFund from "./Screens/EmergencyFund";
import Insurances from "./Screens/Insurances";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/CashFlow" element={<CashFlow />} />
        <Route path="/Debt" element={<Debt />} />
        <Route path="/EmergencyFund" element={<EmergencyFund />} />
        <Route path="/Insurances" element={<Insurances />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
