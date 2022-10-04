import { workFlowMachine } from "./workFlowMachine";

it("should reach paymentInfo given buisnessInfo and NEXT event occurs", () => {
  const expectedState = "enterPaymentDetails";
  const actualState = workFlowMachine.transition("enterBuisnessInfo", {
    type: "NEXT",
    data: {
      contactDetails: {
        firstName: "Arpan",
        lastName: "Sahoo",
        email: "sahoo@arpan.com",
        phoneNum: "1234567890",
      },
      buisnessDetails: { buisnessName: "JIO", buisnessId: "1111" },
    },
  });
  expect(actualState.matches(expectedState)).toBeTruthy();
  expect(actualState.context.buisnessInformation).toEqual({
    contactDetails: {
      firstName: "Arpan",
      lastName: "Sahoo",
      email: "sahoo@arpan.com",
      phoneNum: "1234567890",
    },
    buisnessDetails: { buisnessName: "JIO", buisnessId: "1111" },
  });
});

it("should test BACK click", () => {
  const expectedState = "actionSelection";
  const actualState = workFlowMachine.transition("enterBuisnessInfo", {
    type: "BACK",
  });
  expect(actualState.matches(expectedState)).toBeTruthy();
});

it("test editBuisnessInfo flow", () => {
  const expectedState = "summary";
  const actualState = workFlowMachine.transition("editBuisnessInfo", {
    type: "NEXT",
    data: {
      contactDetails: {
        firstName: "Arpan",
        lastName: "Sahoo",
        email: "sahoo@arpan.com",
        phoneNum: "1234567890",
      },
      buisnessDetails: { buisnessName: "JIO", buisnessId: "1111" },
    },
  });
  expect(actualState.matches(expectedState)).toBeTruthy();
  expect(actualState.context.buisnessInformation).toEqual({
    contactDetails: {
      firstName: "Arpan",
      lastName: "Sahoo",
      email: "sahoo@arpan.com",
      phoneNum: "1234567890",
    },
    buisnessDetails: { buisnessName: "JIO", buisnessId: "1111" },
  });
});
