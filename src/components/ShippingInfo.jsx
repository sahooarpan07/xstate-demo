import { useContext } from 'react'
import Formwrapper from '../shared/Formwrapper'
import { NewAccountContext } from '../context/Context'
import { useNavigate } from "react-router-dom";
import  "./shippingInfo.css";
import { useReducer } from 'react';
import WorkingHours from './shared/WorkingHours';
import { shippingLocationReducer } from "../context/shippingLocationReducer";
import ShippingAddress from './shared/ShippingAddress';

const ShippingInfo = () => {
    const days = [
        {
            id:0,
            value:"Sunday",
            isActive:false,
            operationTiming:''
        },
        {
            id:1,
            value:"Monday",
            isActive:false,
            operationTiming:''
        },
        {
            id:2,
            value:"Tuesday",
            isActive:false,
            operationTiming:''
        },
        {
            id:3,
            value:"Wednesday",
            isActive:false,
            operationTiming:''
        },
        {
            id:4,
            value:"Thursday",
            isActive:false,
            operationTiming:''
        },
        {
            id:5,
            value:"Friday",
            isActive:false,
            operationTiming:''
        },
        {
            id:6,
            value:"Saturday",
            isActive:false,
            operationTiming:''
        }
    ]

    const initialLocalState = {
        workingDays:days,
        shippingLocation:'',
        shippingAddress:{
            streetAddress:'',
            city:'',
            zipCode:''
        },
        shippingInstructions:"",
        isChecked:false
     };

    const { state : globalState , send } = useContext(NewAccountContext);
    const navigate = useNavigate();
    const isEditFlow = globalState.value==="editShipmentInfo"
   
    const initialReducerState = isEditFlow ? globalState.context.shippingInfo[globalState.context.selectedShipInfoIndex] : initialLocalState
    const [ state , dispatch ] = useReducer(shippingLocationReducer,initialReducerState)
     const { workingDays , shippingInstructions , shippingLocation , shippingAddress , isChecked = false  } = state
    const isIncompleteWorkingHourPresent = workingDays.find(day =>{
        return day.isActive && !day.operationTiming
    });
    
    const { streetAddress='',
    city='',
    zipCode=''   } = shippingAddress
    const isShippingAddressIncomplete = streetAddress && city && zipCode

    const isComplete =  !isIncompleteWorkingHourPresent && Boolean(shippingLocation) && Boolean(isShippingAddressIncomplete) && Boolean(shippingInstructions)
   
      const updatedData = {
        shippingLocation,
        workingDays,
        shippingAddress,
        shippingInstructions
      }
      const editFlowData = globalState.context.shippingInfo.map((item,index)=>{
        if(index === globalState.context.selectedShipInfoIndex){
           return globalState.context.shippingInfo[index] = updatedData
        }
        return item
      })

  return (

    
    <Formwrapper
    handleBackClick={()=>{
        send("BACK")
        navigate("/capturePaymentInfo")
    }}
    handleNextClick={()=>{
       // console.log('next');
        send("NEXT",{
            data: isEditFlow?editFlowData:updatedData
        })
         
            const nextRoutePath = isEditFlow ? "/summary":"/addMoreShippingInfo"
            navigate(nextRoutePath)
   

        
    }}
    isDisabled={!isComplete}
    >
        <h5>What is shipping location name?</h5>
        <input type={"text"}
        value={shippingLocation}
        onChange={e=>dispatch({ type:"UPDATE_SHIPPING_LOCATION" ,payload:e.target.value})}

        
        />
        <ShippingAddress
        shippingAddress={shippingAddress}
        handleShippingAddressChange={updatedAddress=>{
            dispatch({ type:"UPDATE_SHIPPING_ADDRESS" ,payload:updatedAddress})
        }}
        />
        <WorkingHours
        workingDays={workingDays}
        updateWorkingDays={(updatedWorkingDays)=>{
        dispatch({ type:"UPDATE_WORKING_HOURS" ,payload:updatedWorkingDays})}
        }/>
         <h5>Are there any delivery instructions?</h5>
         <textarea value={shippingInstructions} onChange={e=>{
            dispatch({ type:"UPDATE_SHIPPING_INSRUCTIONS" ,payload:e.target.value})
         }}/>
         <div className="check-agreement">
            <input type="checkbox" value={isChecked} onChange={()=>dispatch({
                type:"UPDATE_IS_CHECKED"
            })} />
            <p>I would like Hill's to display this location's retail information on their websites so that consumers can easily find buisness in their area</p>
         </div>


         

        


    </Formwrapper>
  )
}

export default ShippingInfo