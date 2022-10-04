import { workFlowMachine } from "../workFlowMachine";

it("Update paymentInfo on next", () => {
  const nextState = "summary";
  const actualState = workFlowMachine.transition("enterPaymentDetails", {
    type: "NEXT",
    data: {
      paymentMethod: "upi",
      bankDetails: {
        accountNumber: "1234567890",
        bankName: "Axis",
      },
    },
  });
  expect(actualState.matches(nextState)).toBeTruthy();
  expect(actualState.context.paymentInformation).toEqual({
    paymentMethod: "upi",
    bankDetails: {
      accountNumber: "1234567890",
      bankName: "Axis",
    },
  });
});
