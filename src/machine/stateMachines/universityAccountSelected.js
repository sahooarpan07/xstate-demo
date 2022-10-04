import { assign } from "xstate";
export const universityAccountSelected = {
  on: {
    BACK: {
      target: "selectAccountState",
      actions: assign({
        accountDetails: (_context, event) => {
          return {};
        },
      }),
    },

    NEXT: {
      target: "actionSelection",
      actions: assign({
        accountDetails: (_context, event) => {
          return {
            accountType: _context.accountType,
            isIndianUniversity: event.data,
          };
        },
      }),
    },
  },
};
