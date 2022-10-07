import { useState , useContext } from 'react'
import Formwrapper from '../shared/Formwrapper'
import { NewAccountContext } from '../context/Context'
import { useNavigate } from "react-router-dom";

const AddMoreShipInfo = () => {
    const [selectedItem, setSelectedItem] = useState();
    const {  send } = useContext(NewAccountContext);
    const navigate = useNavigate();


    const radioItems = [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ];
  
    return (
    <Formwrapper handleNextClick={()=>{
        send("NEXT",{data:selectedItem})
        const nextRoute = selectedItem === "yes" ? "/shippingInfo" : "/summary";
        navigate(nextRoute)

    }}
    handleBackClick={()=>{
        send("BACK")
        navigate("/shippingInfo")
    }}
    isDisabled={false}
    >
        <h3>Do you want to add more ship locations ? </h3>
      {radioItems.map((item, index) => {
        const { label, value } = item;
        return (
          <>
            <div key={index} className="radio-items__container">
              <div className="radio-item">
                <input
                  type={"radio"}
                  value={value}
                  checked={value === selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  key={index}
                />
                {label}
              </div>
            </div>
          </>
        );
      })}

    </Formwrapper>
  )
}

export default AddMoreShipInfo