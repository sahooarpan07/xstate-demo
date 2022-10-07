function shippingLocationReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_WORKING_HOURS":
      console.log("reducer", payload);
      return {
        ...state,
        workingDays: payload,
      };
    case "UPDATE_SHIPPING_LOCATION":
      return {
        ...state,
        shippingLocation: payload,
      };
    case "UPDATE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: payload,
      };
    case "UPDATE_SHIPPING_INSRUCTIONS":
      return {
        ...state,
        shippingInstructions: payload,
      };
    case "UPDATE_IS_CHECKED":
      return {
        ...state,
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
}

export { shippingLocationReducer };
