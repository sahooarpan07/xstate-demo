import { assign } from "xstate";

export const actionSelection = {
  on: {
    BACK: [
      {
        target: "vetAccountSelected.checkIsIndianVet",
        cond: (context, event) => {
          return context.accountType === "vet";
        },
      },
      {
        target: "militaryAccountSelected",
        cond: (context, event) => {
          return context.accountType === "military";
        },
      },
      {
        target: "universityAccountSelected",
        cond: (context, event) => {
          return context.accountType === "university";
        },
      },
    ],
    NEXT: {
      target: "enterBuisnessInfo",
      actions: assign({
        selectedAction: (_context, event) => event.data,
      }),
    },
  },
};
