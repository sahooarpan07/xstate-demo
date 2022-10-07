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
import AddMoreShipInfo from "./components/AddMoreShipInfo";
import Summary from "./components/Summary";
import { useEffect, useContext } from "react";
import { NewAccountContext } from "./context/Context";
import { useNavigate } from "react-router-dom";
import ShippingInfo from "./components/ShippingInfo";
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
    <>
      <Routes>
        <Route path="/buisInfo" element={<BuisnessInfo />} />
        <Route path="/military" element={<MilitaryQuestions />} />
        <Route path="/university" element={<UniversityQuestions />} />
        <Route path="/vetquestionarrie" element={<VETQuestions />} />
        <Route path="/vetIndian" element={<IsIndianVet />} />
        <Route path="/actionSelection" element={<ActionSelection />} />
        <Route path="/capturePaymentInfo" element={<PaymentInfo />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/shippingInfo" element={<ShippingInfo />} />
        <Route path="/addMoreShippingInfo" element={<AddMoreShipInfo />} />
        <Route path="/" element={<AccountType />} />
      </Routes>
    </>
  );
}

export default App;
