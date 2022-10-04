import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Formwrapper from "../shared/Formwrapper";
import { NewAccountContext } from "../context/Context";

const MilitaryQuestions = () => {
  const navigate = useNavigate();
  const {
    state: {
      context: {
        accountDetails: { militaryName = "" },
      },
    },
    send,
  } = useContext(NewAccountContext);
  const [selectedItem, setSelectedItem] = useState(militaryName);

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
      <h2>Enter Military name</h2>
      <input
        type="text"
        value={selectedItem}
        placeholder="Enter Military NAME"
        onChange={(e) => {
          setSelectedItem(e.target.value);
        }}
      />
    </Formwrapper>
  );
};

export default MilitaryQuestions;
