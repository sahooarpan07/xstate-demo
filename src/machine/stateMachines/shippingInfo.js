import { assign } from "xstate";
export const enterShippingInfo = {
  on: {
    BACK: {
      target: "enterPaymentDetails",
    },
    NEXT: {
      target: "summary",
      actions: assign({
        shippingInfo: (_context, event) => [
          ..._context.shippingInfo,
          event.data,
        ],
      }),
    },
  },
};
