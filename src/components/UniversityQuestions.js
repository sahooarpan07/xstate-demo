import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Formwrapper from "../shared/Formwrapper";
import { NewAccountContext } from "../context/Context";

const UniversityQuestions = () => {
  const navigate = useNavigate();
  const {
    state: {
      context: {
        accountDetails: { isIndianUniversity },
      },
    },
    send,
  } = useContext(NewAccountContext);
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
  const [selectedItem, setSelectedItem] = useState(isIndianUniversity);
  return (
    <Formwrapper
      handleBackClick={() => {
        send("BACK");
        navigate("/");
      }}
      handleNextClick={() => {
        send("NEXT", { data: selectedItem });
        navigate("/actionSelection");
      }}
      isDisabled={!selectedItem}
    >
      <h2>Is Indian university</h2>
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

export default UniversityQuestions;
