import { assign } from "xstate";
export const editPaymentInfo = {
  on: {
    NEXT: {
      target: "summary",
      actions: assign({
        paymentInformation: (_context, event) => event.data,
        isEditFlow: () => false,
      }),
    },
    BACK: {
      target: "enterBuisnessInfo",
      actions: assign({
        isEditFlow: () => false,
      }),
    },
  },
};
