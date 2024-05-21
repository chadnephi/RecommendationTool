import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CashFlow from "./Screens/CashFlow";
import Debt from "./Screens/Debt";
import EmergencyFund from "./Screens/EmergencyFund";
import Insurances from "./Screens/Insurances";
import Investments from "./Screens/Investments/Investments";
import Wealth from "./Screens/W&EP";
import MidTermGoals from "./Screens/MidTermGoals";
import AuthScreen from "./Screens/AuthScreen";
import Home from "./Screens/Home";

function App() {
  const token = "77IEE";
  const [usersToken, setUsersToken] = useState("");

  const [isAuthorized, setIsAuthorized] = useState(false)

  return (
    <div className="App">
      {isAuthorized && <Header />}
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthScreen
              token={token}
              setUsersToken={setUsersToken}
              usersToken={usersToken}
              setIsAuthorized={setIsAuthorized}
            />
          }
        />
        <Route
          path="/Home"
          element={isAuthorized ? <Home /> : <Navigate to="/auth" />}
        />
        <Route
          path="/CashFlow"
          element={isAuthorized ? <CashFlow /> : <Navigate to="/auth" />}
        />
        <Route
          path="/Debt"
          element={isAuthorized ? <Debt /> : <Navigate to="/auth" />}
        />
        <Route
          path="/EmergencyFund"
          element={isAuthorized ? <EmergencyFund /> : <Navigate to="/auth" />}
        />
        <Route
          path="/Insurances"
          element={isAuthorized ? <Insurances /> : <Navigate to="/auth" />}
        />
        <Route
          path="/Investments"
          element={isAuthorized ? <Investments /> : <Navigate to="/auth" />}
        />
        <Route
          path="/Wealth&EstatePreservation"
          element={isAuthorized ? <Wealth /> : <Navigate to="/auth" />}
        />
        <Route
          path="/MidTermGoals"
          element={isAuthorized ? <MidTermGoals /> : <Navigate to="/auth" />}
        />
        <Route path="*" element={<Navigate to='/auth'/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
