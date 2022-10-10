import { createContext, useEffect } from "react";
import { useMachine } from "@xstate/react";
import { workFlowMachine } from "../machine/workFlowMachine";
//import { setVetDetails } from "../machine/stateMachines/vetAccountSelected";
export const NewAccountContext = createContext();

const Context = ({ children }) => {
  const [state, send] = useMachine(workFlowMachine);
  useEffect(() => {
    console.log(`${state.context.shippingInfo} value`);
  }, [state.context.shippingInfo.length]);

  return (
    <>
      <NewAccountContext.Provider value={{ state, send }}>
        {children}
      </NewAccountContext.Provider>
    </>
  );
};

export default Context;
