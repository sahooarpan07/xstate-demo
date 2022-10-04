import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {} from "react-router";
import Formwrapper from "../shared/Formwrapper";
import { NewAccountContext } from "../context/Context";
import { getRoute } from "./getRoute.util";

const ActionSelection = (props) => {
  const navigate = useNavigate();

  const {
    state: {
      context: {
        selectedAction,
        accountType = "",
        accountDetails: { vetDetails: { vetName = "" } = {} },
      },
    },
    send,
  } = useContext(NewAccountContext);
  const radioItems = [
    {
      label: "Create New Buisness Account",
      value: "createNew",
    },
    {
      label: "Edit Payment",
      value: "editPayment",
    },
  ];

  function getUpdatedItems(radioItems, accountType) {
    const isUniversityAccountType = accountType === "university";
    const filterEditPaymentFromArray = radioItems.filter(
      (item) => item.value === "editPayment"
    );
    const updatedArray = [
      ...filterEditPaymentFromArray,
      {
        label: "Edit New Buisness Account",
        value: "editNewBuisnessAccount",
      },
    ];
    return isUniversityAccountType ? updatedArray : radioItems;
  }

  const updatedRadioItems = getUpdatedItems(radioItems, accountType);

  const [selectedItem, setSelectedItem] = useState(selectedAction);
  return (
    <Formwrapper
      handleBackClick={() => {
        send("BACK");
        const route = getRoute(accountType, vetName);

        navigate(route);
      }}
      handleNextClick={() => {
        send("NEXT", { data: selectedItem });
        navigate("/buisInfo");
      }}
      isDisabled={!selectedItem}
    >
      <h2>Select Next Action</h2>
      {updatedRadioItems.map((item, index) => {
        const { label, value } = item;
        return (
          <>
            <div className="radio-items__container">
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
  );
};

export default ActionSelection;
