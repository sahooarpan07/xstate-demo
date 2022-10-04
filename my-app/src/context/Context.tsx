import { createContext } from "react";
//import { newAccountReducer } from "./newAccountReducer";
import { useMachine } from "@xstate/react";
import { workFlowMachine } from "../machine/workFlowMachine";

interface NewAccountType{
  state:any;
  send:any;
}

export const NewAccountContext = createContext<NewAccountType | undefined>(undefined);

const Context = ( props:any ) => {
  
  const [state, send] = useMachine(workFlowMachine);

  return (
    <>
      <NewAccountContext.Provider value={{ state, send }}>
        {props.children}
      </NewAccountContext.Provider>
    </>
  );
};

export default Context;
