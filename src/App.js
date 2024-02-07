import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import CashFlow from "./Screens/CashFlow";
import Debt from "./Screens/Debt";
import EmergencyFund from "./Screens/EmergencyFund";

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/CashFlow" element={<CashFlow/>}/>
        <Route path="/Debt" element={<Debt/>}/>
        <Route path="/EmergencyFund" element={<EmergencyFund/>}/>
      </Routes>

    </div>
  );
}

export default App;
