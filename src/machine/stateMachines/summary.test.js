import { workFlowMachine } from "../workFlowMachine";
it("Go to Edit Buisness Info flow", () => {
  const nextState = "editBuisnessInfo";
  const actualState = workFlowMachine.transition("summary", {
    type: "EDIT_BUISNESS_INFO",
  });
  expect(actualState.matches(nextState)).toBeTruthy();
  expect(actualState.context.isEditFlow).toEqual(true);
});
