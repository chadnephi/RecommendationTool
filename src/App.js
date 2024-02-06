import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import CashFlow from "./Screens/CashFlow";

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/CashFlow" element={<CashFlow/>}/>
      </Routes>

    </div>
  );
}

export default App;
