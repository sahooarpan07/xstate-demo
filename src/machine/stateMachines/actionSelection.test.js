import { vetMachine } from "../workFlowMachine";
it("should go back to accountType based on selectedAccountType", () => {
  const nextState = "vetAccountSelected";
  const actualState = vetMachine.transition("actionSelection", {
    type: "BACK",
  });
  expect(actualState.matches(nextState)).toBeTruthy();
});

it("should go to BuisnessInfo flow", () => {
  const nextState = "enterBuisnessInfo";
  const actualState = vetMachine.transition("actionSelection", {
    type: "NEXT",
  });
  expect(actualState.matches(nextState)).toBeTruthy();
});
