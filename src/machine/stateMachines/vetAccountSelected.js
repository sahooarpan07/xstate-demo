import { assign } from "xstate";
export const initialVetState = {
  vetName: "",
  isIndianVet: "",
};
export const vetAccountSelected = {
  initial: "checkIsIndianVet",
  states: {
    enterVetName: {
      on: {
        BACK: {
          target: "checkIsIndianVet",
        },
        NEXT: {
          target: "#workFlow.actionSelection",
          actions: assign({
            accountDetails: (_context, event) => {
              return {
                accountType: _context.accountType,
                vetDetails: {
                  ..._context.accountDetails.vetDetails,
                  vetName: event.data,
                },
              };
            },
          }),
        },
      },
    },
    checkIsIndianVet: {
      on: {
        NEXT: {
          target: "enterVetName",
          actions: assign({
            accountDetails: (_context, event) => {
              return {
                accountType: _context.accountType,
                vetDetails: {
                  ..._context.accountDetails.vetDetails,
                  isIndianVet: event.data,
                },
              };
            },
          }),
        },
      },
    },
  },

  on: {
    BACK: {
      target: "selectAccountState",
      actions: assign({ accountDetails: (_context, event) => {} }),
    },
  },
  //  ...vetSelectedStates,
};
