import { assign, createMachine, EventObject } from "xstate";

enum NewAccountStatesValue{
    selectAccountState = "selectAccountState",
    accountSelected = 'accountSelected'
}

interface NewAccountContext {
    accountType:string;
}

// interface NewAccountStates{
// states:{
//     [NewAccountStatesValue.accountSelected]:{},
//     [NewAccountStatesValue.selectAccountState]:{}
// }
// }

export enum NewAccountEvents{
    ACCOUNT_SELECTED = 'ACCOUNT_SELECTED',
    BACK = 'BACK'
}

type EventTypesSchema = NewAccountEvents.ACCOUNT_SELECTED | NewAccountEvents.BACK;


interface NewAccountMachineEvents extends EventObject {
    data: string;
    type:EventTypesSchema;

}



const workFlowMachine = createMachine<NewAccountContext, NewAccountMachineEvents>({
  id: "workFlow",
  initial: NewAccountStatesValue.selectAccountState,
  states: {
    [NewAccountStatesValue.selectAccountState]: {
      on: {
        ACCOUNT_SELECTED: {
          target: NewAccountStatesValue.accountSelected,
          actions: assign({ accountType: (_context, event) => event.data }),
        },
      },
    },
    [NewAccountStatesValue.accountSelected]: {
      on: {
        BACK: {
          target: NewAccountStatesValue.selectAccountState,
        },
      },
    },
  },
  context: {
    accountType: "",
  },
});

export { workFlowMachine };
