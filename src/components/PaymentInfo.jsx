import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { NewAccountContext } from "../context/Context";
import Formwrapper from "../shared/Formwrapper";
import "./accountType.css";
import { newAccountReducer } from "../context/newAccountReducer";
import { isValidAccountNumber, isValidBankName } from "../utils/validateInputField";
const PaymentInfo = () => {
  const {
    state: {
      context: { paymentInformation },
    },
    send,
  } = useContext(NewAccountContext);

  const radioItems = [
    {
      label: "UPI",
      value: "upi",
    },
    {
      label: "Debit Card",
      value: "debitCard",
    },
    {
        label: "Credit Card",
        value: "creditCard",
    },
  ];

  
  const [state, dispatch] = useReducer(
    newAccountReducer,
    paymentInformation
  );
  const {
    paymentMethod,
    bankDetails:{
        accountNumber="",
        bankName = "",
        errorDetails:{
          accountNumberErrorMessage="",
          bankNameErrorMessage = ""
        }={}
    },
    
    } = state;

  const navigate = useNavigate();
  return (
    <Formwrapper
      handleBackClick={() => {
        send("BACK");
        navigate("/buisInfo");
      }}
      handleNextClick={() => {
        dispatch({ type: "UPDATE_BANK_ERROR_DETAILS" });
        //if(paymentMethod && isValidAccountNumber(accountNumber) && isValidBankName(bankName)){
          send("NEXT", { data: state });
        
        navigate("/shippingInfo")
        

        //}
        
      }}
      isDisabled={!(paymentMethod && accountNumber && bankName)}
    >
      <main>
        <h5>Please choose your Payment mode:</h5>
        {radioItems.map((item, index) => {
        const { label, value } = item;
        return (
          <>
            <div className="radio-items__container">
              <div className="radio-item">
                
                <input
                  type={"radio"}
                  value={value}
                  checked={value === paymentMethod}
                  onChange={(e) => dispatch({type:"UPDATE_PAYMENT_METHOD",payload:e.target.value} )}
                  key={index}
                  id={`${value}-payment-method`}
                  />
                  <label htmlFor={`${value}-payment-method`}>
                  {label}
                  </label>
                
              </div>
            </div>
          </>
        );
      })}
      
                  <label htmlFor="accountNumber">
                    <h5>Account Number</h5>
                    
                  </label>
                  <input type={"text"} value={accountNumber}  
                  onChange={(e) => dispatch({type:"UPDATE_ACCOUNT_NUMBER",payload:e.target.value} )}
                  />
                  <p className="error-message">{accountNumberErrorMessage}</p>
                    
                  <label htmlFor="accountNumber">
                    <h5>Bank Name</h5>
                    
                  </label>
                  <input type={"text"} value={bankName}  
                  onChange={(e) => dispatch({type:"UPDATE_BANK_NAME",payload:e.target.value} )}
                  />
                  <p className="error-message">{bankNameErrorMessage}</p>
                    
        </main>
              
    </Formwrapper>
  );
};

export default PaymentInfo;

