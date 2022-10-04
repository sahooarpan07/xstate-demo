import { assign } from "xstate";
export const summary = {
  on: {
    BACK: {
      target: "enterPaymentDetails",
    },
    EDIT_BUISNESS_INFO: {
      target: "editBuisnessInfo",
      actions: assign({
        isEditFlow: () => true,
      }),
    },
    EDIT_PAYMENT_INFO: {
      target: "editPaymentInfo",
      actions: assign({
        isEditFlow: () => true,
      }),
    },
  },
};
