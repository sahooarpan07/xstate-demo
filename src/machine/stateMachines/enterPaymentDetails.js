import { assign } from "xstate";
export const enterPaymentDetails = {
  on: {
    BACK: {
      target: "enterBuisnessInfo",
    },
    NEXT: {
      target: "enterShippingInfo",
      actions: assign({
        paymentInformation: (_context, event) => event.data,
      }),
    },
  },
};
