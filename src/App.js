import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";

import AuthContext from "./AuthComps/authContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CashFlow from "./Screens/CashFlow";
import Debt from "./Screens/Debt";
import EmergencyFund from "./Screens/EmergencyFund";
import Insurances from "./Screens/Insurances";
import Investments from "./Screens/Investments/Investments";
import Wealth from "./Screens/W&EP";
import MidTermGoals from "./Screens/MidTermGoals";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/CashFlow" element={<CashFlow />} />
        <Route path="/Debt" element={<Debt />} />
        <Route path="/EmergencyFund" element={<EmergencyFund />} />
        <Route path="/Insurances" element={<Insurances />} />
        <Route path="/Investments" element={<Investments />} />
        <Route path="/Wealth&EstatePreservation" element={<Wealth />} />
        <Route path="/MidTermGoals" element={<MidTermGoals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
