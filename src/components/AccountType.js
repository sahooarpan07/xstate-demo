import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Formwrapper from "../shared/Formwrapper";
import "./accountType.css";
import { NewAccountContext } from "../context/Context";
import { getRoute } from "./getRoute.util";
const AccountType = () => {
  const { state: { context: { accountType = "" } = {} } = {}, send } =
    useContext(NewAccountContext);

  const [selectedItem, setSelectedItem] = useState(accountType);
  const navigate = useNavigate();

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
    <Formwrapper
      handleNextClick={() => {
        const route = getRoute(selectedItem);
        send("ACCOUNT_SELECTED", { data: selectedItem });
        navigate(route);
      }}
      isDisabled={!selectedItem}
    >
      <h3>Select Account Type</h3>
      {radioItems.map((item, index) => {
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

export default AccountType;
