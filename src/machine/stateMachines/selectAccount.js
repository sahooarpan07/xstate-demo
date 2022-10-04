import { assign } from "xstate";

export const selectAccountState = {
  on: {
    ACCOUNT_SELECTED: [
      {
        actions: assign({ accountType: (_context, event) => event.data }),
        target: "vetAccountSelected",
        cond: (context, event) => {
          return event.data === "vet";
        },
      },
      {
        actions: assign({ accountType: (_context, event) => event.data }),
        target: "militaryAccountSelected",
        cond: (context, event) => {
          return event.data === "military";
        },
      },
      {
        actions: assign({ accountType: (_context, event) => event.data }),
        target: "universityAccountSelected",
        cond: (context, event) => {
          return event.data === "university";
        },
      },
    ],
  },
};
