import { createMachine } from "xstate";
import { selectAccountState } from "./stateMachines/selectAccount";
import { vetAccountSelected } from "./stateMachines/vetAccountSelected";
import { militaryAccountSelected } from "./stateMachines/militaryAccountSelected";
import { universityAccountSelected } from "./stateMachines/universityAccountSelected";
import { actionSelection } from "./stateMachines/actionSelection";
import { enterBuisnessInfo } from "./stateMachines/enterBuisnessInfo";
import { enterPaymentDetails } from "./stateMachines/enterPaymentDetails";
import { summary } from "./stateMachines/summary";
import { editBuisnessInfo } from "./stateMachines/editBuisnessInfo";
import { editPaymentInfo } from "./stateMachines/editPaymentInfo";
import { enterShippingInfo } from "./stateMachines/shippingInfo";
import { editShipmentInfo } from "./stateMachines/editShipmentInfo";
import { context, vetContext } from "./stateMachines/context";
import { addMoreShippingInfo } from "./stateMachines/addMoreShippingInfo";
const workFlowMachine = createMachine({
  id: "workFlow",
  initial: "selectAccountState",
  context: context,
  states: {
    selectAccountState,
    vetAccountSelected,
    militaryAccountSelected,
    universityAccountSelected,
    actionSelection,
    enterBuisnessInfo,
    enterPaymentDetails,
    enterShippingInfo,
    addMoreShippingInfo,
    summary,
    editBuisnessInfo,
    editPaymentInfo,
    editShipmentInfo,
  },
});

const vetMachine = createMachine({
  id: "workFlow",
  initial: "selectAccountState",
  context: vetContext,
  states: {
    selectAccountState,
    vetAccountSelected,
    militaryAccountSelected,
    universityAccountSelected,
    actionSelection,
    enterBuisnessInfo,
    enterPaymentDetails,
    enterShippingInfo,
    summary,
    editBuisnessInfo,
    editPaymentInfo,
  },
});

export { workFlowMachine, vetMachine };
