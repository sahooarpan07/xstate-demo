import { assign } from "xstate";
export const editBuisnessInfo = {
  on: {
    NEXT: {
      target: "summary",
      actions: assign({
        buisnessInformation: (_context, event) => event.data,
      }),
    },
    BACK: {
      target: "actionSelection",
      actions: assign({
        isEditFlow: () => false,
      }),
    },
  },
};
