import "./App.css";
import { Route, Routes } from "react-router-dom";
import AccountType from "./components/AccountType";
import BuisnessInfo from "./components/BuisnessInfo";
import MilitaryQuestions from "./components/MilitaryQuestions";
import UniversityQuestions from "./components/UniversityQuestions";
import VETQuestions from "./components/VETQuestions";
import IsIndianVet from "./components/IsIndianVet";
import ActionSelection from "./components/ActionSelection";
import PaymentInfo from "./components/PaymentInfo";
import Summary from "./components/Summary";
import { useEffect, useContext } from "react";
import { NewAccountContext } from "./context/Context";
import { useNavigate } from "react-router-dom";
function App() {
  const { state } = useContext(NewAccountContext);
  const navigate = useNavigate();
  useEffect(() => {
    // On refresh redirect to start page
    if (state.matches("selectAccountState")) {
      navigate("/");
    }
  }, [state, navigate]);

  return (
    <div className="form-container">
      <Routes>
        <Route path="/buisInfo" element={<BuisnessInfo />} />
        <Route path="/military" element={<MilitaryQuestions />} />
        <Route path="/university" element={<UniversityQuestions />} />
        <Route path="/vetquestionarrie" element={<VETQuestions />} />
        <Route path="/vetIndian" element={<IsIndianVet />} />
        <Route path="/actionSelection" element={<ActionSelection />} />
        <Route path="/capturePaymentInfo" element={<PaymentInfo />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/" element={<AccountType />} />
      </Routes>
    </div>
  );
}

export default App;
