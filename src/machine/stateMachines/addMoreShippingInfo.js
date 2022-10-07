export const addMoreShippingInfo = {
  on: {
    BACK: {
      target: "enterShippingInfo",
    },
    NEXT: [
      {
        target: "enterShippingInfo",
        cond: (_context, event) => {
          return event.data === "yes";
        },
      },
      {
        target: "summary",
        cond: (_context, event) => {
          return event.data === "no";
        },
      },
    ],
  },
};
