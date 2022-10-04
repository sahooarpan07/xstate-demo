import  { useContext, useState } from 'react'
import Formwrapper from '../../../shared/formContainer/Formwrapper'
import FormRadioInputGroup from '../../../shared/formRadioInputGroup/FormRadioInputGroup';
import { NewAccountContext  } from "../../../../context/Context";
import { NewAccountEvents } from '../../../../machine/workFlowMachine';
const AccountType = () => {

    //const { state, send } = useContext(NewAccountContext) || {};

    const [selectedItem, setSelectedItem] = useState<string>("");
    



    const radioItems = [
        {
          label: "VET",
          value: "vet",
        },
        {
          label: "Military",
          value: "military",
        },
        {
          label: "University",
          value: "university",
        },
        
      ];
      
  return (
    <Formwrapper handleBackClick={()=>{}}
    handleNextClick={()=>{
      // send(NewAccountEvents.ACCOUNT_SELECTED,{
      //   data:selectedItem
      // })
    }}
    >
        <FormRadioInputGroup
        handleChange={(value:string)=>setSelectedItem(value)}
        header={"Select Account Type"}
        radioItems={radioItems}
        selectedItem={selectedItem}
        />

    </Formwrapper>
  )
}

export default AccountType