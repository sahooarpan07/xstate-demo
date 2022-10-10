import { assign } from "xstate";
export const editShipmentInfo = {
  on: {
    NEXT: {
      target: "summary",
      actions: assign({
        shippingInfo: (_context, event) => event.data,
      }),
    },
  },
};
