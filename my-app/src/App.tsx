import "./App.css";
import { Route, Routes } from "react-router-dom";
import AccountType from "./components/workFlows/accountType/Accou/AccountType";
function App() {
  return (
    <div className="form-container">
      <Routes>

        <Route path="/" element={<AccountType />} />
      </Routes>
    </div>
  );
}

export default App;
