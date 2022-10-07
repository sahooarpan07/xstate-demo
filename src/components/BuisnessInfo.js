import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { NewAccountContext } from "../context/Context";
import Formwrapper from "../shared/Formwrapper";
import "./accountType.css";
import { newAccountReducer } from "../context/newAccountReducer";
import { isValidEmail, isValidPhoneNumber } from "../utils/validateInputField";
const BuisnessInfo = () => {
  const {
    state: {
      context: {
        accountType,
        buisnessInformation: buisnessInfoInitialState,
        isEditFlow,
      },
    },
    send,
  } = useContext(NewAccountContext);

  const isUniversity = accountType === "university";

  const [state, dispatch] = useReducer(
    newAccountReducer,
    buisnessInfoInitialState
  );
  const {
    contactDetails: {
      firstName = "",
      lastName = "",
      email = "",
      phoneNum = "",
    },
    buisnessDetails: { buisnessName = "", buisnessId = "" },
    errorDetails: {
      firstNameErrorMessage = "",
      lastNameErrorMessage = "",
      emailErrorMessage = "",
      phoneNumberErrorMessage = "",
      buisnessNameErrorMessage = "",
      buisnessIdErrorMessage = "",
    } = {},
  } = state;

  const navigate = useNavigate();
  return (
    <Formwrapper
      handleBackClick={() => {
        send("BACK");
        navigate("/actionSelection");
      }}
      handleNextClick={() => {
        dispatch({ type: "UPDATE_ERROR_DETAILS" });
        const isValid =
          Boolean(firstName) &&
          Boolean(lastName) &&
          isValidEmail(email) &&
          isValidPhoneNumber(phoneNum) &&
          Boolean(buisnessName || buisnessId);
        if (isValid) {
          send("NEXT", { data: state });
          const nextRoute = isEditFlow ? "/summary" : "/capturePaymentInfo";
          navigate(nextRoute);
        }
      }}
      isDisabled={
        !(
          Boolean(firstName) &&
          Boolean(lastName) &&
          Boolean(email) &&
          Boolean(phoneNum) &&
          Boolean(buisnessName || buisnessId)
        )
      }
    >
      <main className="buisness-details">
        <h2>Buisness Information</h2>
        <h5>Enter Contact Info:</h5>
        <input
          type={"text"}
          value={firstName}
          placeholder="Enter First Name"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch({ type: "UPDATE_FIRST_NAME", payload: e.target.value });
          }}
        />
        <p className="error-message">{firstNameErrorMessage}</p>

        <input
          type={"text"}
          value={lastName}
          placeholder="Enter Last Name"
          onChange={(e) =>
            dispatch({ type: "UPDATE_LAST_NAME", payload: e.target.value })
          }
        />
        <p className="error-message">{lastNameErrorMessage}</p>
        <input
          type={"text"}
          value={email}
          placeholder="Email"
          onChange={(e) =>
            dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
          }
        />
        <p className="error-message">{emailErrorMessage}</p>
        <input
          type={"text"}
          value={phoneNum}
          placeholder="Phone number"
          onChange={(e) =>
            dispatch({ type: "UPDATE_PHONE_NUM", payload: e.target.value })
          }
        />
        <p className="error-message">{phoneNumberErrorMessage}</p>
      </main>
      {!isUniversity && (
        <>
          <h5>Enter Business Name</h5>
          <input
            type={"text"}
            value={buisnessName}
            placeholder="Business Name"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_BUISNESS_NAME",
                payload: e.target.value,
              })
            }
          />
          <p className="error-message">{buisnessNameErrorMessage}</p>
        </>
      )}
      {isUniversity && (
        <>
          <h5>Enter Business ID</h5>
          <input
            type={"text"}
            value={buisnessId}
            placeholder="Business ID"
            onChange={(e) =>
              dispatch({ type: "UPDATE_BUISNESS_ID", payload: e.target.value })
            }
          />
          <p className="error-message">{buisnessIdErrorMessage}</p>
        </>
      )}
    </Formwrapper>
  );
};

export default BuisnessInfo;
