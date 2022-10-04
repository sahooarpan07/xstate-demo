import { assign } from "xstate";

export const verifyIndianVet = {
  on: {
    BACK: {
      target: "vetAccountSelected",
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
};
