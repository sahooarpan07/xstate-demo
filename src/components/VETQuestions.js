import { useState, useContext } from "react";
import "./vetQuestions.css";
import { useNavigate } from "react-router-dom";
import Formwrapper from "../shared/Formwrapper";
import { NewAccountContext } from "../context/Context";

const VETQuestions = () => {
  const navigate = useNavigate();
  const {
    state: {
      context: {
        accountDetails: { vetDetails: { vetName = "" } = {} } = {},
      } = {},
    } = {},
    send,
  } = useContext(NewAccountContext);
  const [selectedItem, setSelectedItem] = useState(vetName);

  return (
    <Formwrapper
      handleBackClick={() => {
        send("BACK");
        navigate("/");
      }}
      handleNextClick={() => {
        send("NEXT", { data: selectedItem });
        // navigate("/vetIndian");
        navigate("/actionSelection");
      }}
      isDisabled={!selectedItem}
    >
      <h5>Enter VET NAME</h5>
      <input
        type="text"
        value={selectedItem}
        placeholder="Enter VET NAME"
        onChange={(e) => {
          setSelectedItem(e.target.value);
        }}
      />
    </Formwrapper>
  );
};

export default VETQuestions;
