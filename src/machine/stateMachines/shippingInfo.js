import { assign } from "xstate";
export const enterShippingInfo = {
  on: {
    BACK: {
      target: "enterPaymentDetails",
      actions: assign({
        shippingInfo: (_context, event) => [],
      }),
    },
    NEXT: {
      target: "addMoreShippingInfo",

      actions: assign({
        shippingInfo: (_context, event) => [
          event.data,
          ..._context.shippingInfo,
        ],
      }),
    },
  },
};
