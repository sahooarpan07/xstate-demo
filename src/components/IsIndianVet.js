import React from "react";
import { useState, useContext } from "react";
import "./vetQuestions.css";
import { useNavigate } from "react-router-dom";
import Formwrapper from "../shared/Formwrapper";
import { NewAccountContext } from "../context/Context";

const IsIndianVet = () => {
  const {
    state: {
      context: { accountDetails: { vetDetails: { isIndianVet } = {} } = {} },
    } = {},
    send,
  } = useContext(NewAccountContext);
  const [selectedItem, setSelectedItem] = useState(isIndianVet);

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
    <Formwrapper
      handleBackClick={() => {
        send("BACK");
        navigate("/vetquestionarrie");
      }}
      handleNextClick={() => {
        send("NEXT", { data: selectedItem });
        //navigate("/actionSelection");
        navigate("/vetquestionarrie");
      }}
      isDisabled={!selectedItem}
    >
      Is Vet Indian ?
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
  );
};

export default IsIndianVet;
