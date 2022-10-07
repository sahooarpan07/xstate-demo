import { assign } from "xstate";
export const summary = {
  on: {
    BACK: {
      target: "addMoreShippingInfo",
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
    EDIT_SHIPMENT_INFO: {
      target: "editShipmentInfo",
      actions: assign({
        selectedShipInfoIndex: (_context, event) => event.data,
      }),
    },
  },
};
