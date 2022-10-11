import { assign } from "xstate";
export const enterShippingInfo = {
  initial: "captureShippingInfo",
  states: {
    captureShippingInfo: {
      on: {
        BACK: {
          target: "#workFlow.enterPaymentDetails",
          actions: assign({
            shippingInfo: (_context, event) => [],
          }),
        },
        NEXT: {
          target: "confirmShouldAddMoreShippingInfo",
          actions: assign({
            shippingInfo: (_context, event) => [
              event.data,
              ..._context.shippingInfo,
            ],
          }),
        },
      },
    },
    confirmShouldAddMoreShippingInfo: {
      on: {
        NEXT: [
          {
            target: "captureShippingInfo",
            cond: (_context, event) => {
              return event.data === "yes";
            },
          },
          {
            target: "#workFlow.summary",
            cond: (_context, event) => {
              return event.data === "no";
            },
          },
        ],
        BACK: {
          target: "captureShippingInfo",
        },
      },
    },
  },
};
