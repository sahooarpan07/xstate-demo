import { assign } from "xstate";
export const initialVetState = {
  vetName: "",
  isIndianVet: "",
};

export const setVetDetails = () => {
  assign({
    accountDetails: (_context, event) => {
      return {
        accountType: _context.accountType,
        vetDetails: {
          ..._context.accountDetails.vetDetails,
          vetName: event.data,
        },
      };
    },
  });
};

const vetSelectedStates = {
  initial: "enterVetName",
  states: {
    enterVetName: {
      on: {
        actions: setVetDetails,
        NEXT: { target: "checkIsIndianVet" },
      },
    },
    checkIsIndianVet: {
      on: {
        BACK: { target: "enterVetName" },
      },
    },
  },
};

export const vetAccountSelected = {
  on: {
    BACK: {
      target: "selectAccountState",
      actions: assign({ accountDetails: (_context, event) => {} }),
    },

    NEXT: {
      target: "actionSelection",
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
  ...vetSelectedStates,
};
