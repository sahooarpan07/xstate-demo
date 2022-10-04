import { assign } from "xstate";
export const enterBuisnessInfo = {
  on: {
    BACK: {
      target: "actionSelection",
    },
    NEXT: {
      target: "enterPaymentDetails",
      actions: assign({
        buisnessInformation: (_context, event) => event.data,
      }),
    },
  },
};
