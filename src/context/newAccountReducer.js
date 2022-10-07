import {
  isValidAccountNumber,
  isValidEmail,
  isValidPhoneNumber,
  isValidBankName,
} from "../utils/validateInputField";

function newAccountReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_FIRST_NAME":
      const { contactDetails } = state;
      const updatedContactDetails = {
        ...contactDetails,
        firstName: payload,
      };
      return {
        ...state,
        contactDetails: updatedContactDetails,
      };
    case "UPDATE_LAST_NAME": {
      const { contactDetails } = state;
      const updatedContactDetails = {
        ...contactDetails,
        lastName: payload,
      };
      return {
        ...state,
        contactDetails: updatedContactDetails,
      };
    }
    case "UPDATE_EMAIL": {
      const { contactDetails } = state;
      const updatedContactDetails = {
        ...contactDetails,
        email: payload,
      };
      return {
        ...state,
        contactDetails: updatedContactDetails,
      };
    }
    case "UPDATE_PHONE_NUM": {
      const { contactDetails } = state;
      const updatedContactDetails = {
        ...contactDetails,
        phoneNum: payload,
      };
      return {
        ...state,
        contactDetails: updatedContactDetails,
      };
    }

    case "UPDATE_BUISNESS_NAME": {
      const { buisnessDetails } = state;
      const updatedBuisnessDetails = {
        ...buisnessDetails,
        buisnessName: payload,
      };
      return {
        ...state,
        buisnessDetails: updatedBuisnessDetails,
      };
    }
    case "UPDATE_BUISNESS_ID": {
      const { buisnessDetails } = state;
      const updatedBuisnessDetails = {
        ...buisnessDetails,
        buisnessId: payload,
      };
      return {
        ...state,
        buisnessDetails: updatedBuisnessDetails,
      };
    }
    case "UPDATE_PAYMENT_METHOD":
      const updatedPaymentInfo = {
        ...state,
        paymentMethod: payload,
      };
      return updatedPaymentInfo;
    case "UPDATE_ACCOUNT_NUMBER":
      const { bankDetails } = state;
      const updatedBankDetails = {
        ...bankDetails,
        accountNumber: payload,
      };

      return {
        ...state,
        bankDetails: updatedBankDetails,
      };
    case "UPDATE_BANK_NAME": {
      const { bankDetails } = state;
      const updatedBankDetails = {
        ...bankDetails,
        bankName: payload,
      };

      return {
        ...state,
        bankDetails: updatedBankDetails,
      };
    }
    case "UPDATE_BANK_ERROR_DETAILS": {
      const {
        bankDetails,
        bankDetails: { bankName, accountNumber, errorDetails } = {},
      } = state;
      const updatedErrorState = {
        ...errorDetails,
        accountNumberErrorMessage: !isValidAccountNumber(accountNumber)
          ? "Please enter valid account Number"
          : "",
        bankNameErrorMessage: !isValidBankName(bankName)
          ? "Please enter valid bank name"
          : "",
      };
      const updatedBankDetails = {
        ...bankDetails,
        errorDetails: updatedErrorState,
      };

      return {
        ...state,
        bankDetails: updatedBankDetails,
      };
    }
    case "UPDATE_ERROR_DETAILS":
      const {
        contactDetails: {
          firstName = "",
          lastName = "",
          email = "",
          phoneNum = "",
        },
        buisnessDetails: { buisnessName = "", buisnessId = "" },
        errorDetails,
      } = state;
      const updatedErrorState = {
        ...errorDetails,
        firstNameErrorMessage: !firstName ? "Please enter first Name" : "",
        lastNameErrorMessage: !lastName ? "Please enter last Name" : "",
        emailErrorMessage: !isValidEmail(email)
          ? "Please enter valid email"
          : "",
        phoneNumberErrorMessage: !isValidPhoneNumber(phoneNum)
          ? "Please enter valid phone number"
          : "",
        buisnessNameErrorMessage: !buisnessName
          ? "Please enter buisnessName"
          : "",
        buisnessIdErrorMessage: !buisnessId ? "Please enter buisnessName" : "",
      };
      return {
        ...state,
        errorDetails: updatedErrorState,
      };

    default:
      return state;
  }
}

export { newAccountReducer };
