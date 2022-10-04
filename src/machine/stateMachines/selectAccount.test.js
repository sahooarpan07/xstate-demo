import { workFlowMachine } from "../workFlowMachine";
it("should reach acccountState from selectAccountState based on  ACCOUNT_SELECTED", () => {
  const vetState = "vetAccountSelected";
  const actualState = workFlowMachine.transition("selectAccountState", {
    type: "ACCOUNT_SELECTED",
    data: "vet",
  });

  const militaryAccountState = "militaryAccountSelected";
  const actualNewState = workFlowMachine.transition("selectAccountState", {
    type: "ACCOUNT_SELECTED",
    data: "military",
  });

  expect(actualNewState.matches(militaryAccountState)).toBeTruthy();
  expect(actualState.matches(vetState)).toBeTruthy();
});

it("should reach buisnessInfo given actionSelection and NEXT event occurs", () => {
  const expectedState = "enterBuisnessInfo";
  const actualState = workFlowMachine.transition("actionSelection", {
    type: "NEXT",
  });
  expect(actualState.matches(expectedState)).toBeTruthy();
});
it("should update accountType on ACCOUNT_SELECTED", () => {
  const actualState = workFlowMachine.transition("selectAccountState", {
    type: "ACCOUNT_SELECTED",
    data: "vet",
  });
  expect(actualState.context.accountType).toEqual("vet");
});
