import React from "react";
import "./formWapper.css";

const Formwrapper = ({
  children,
  handleBackClick,
  handleNextClick,
  nextButtonText = "Continue",
  isDisabled = true,
}) => {
  return (
    <main className="form-wrapper">
      <div className="form-data">{children}</div>
      <div className="form_navigate-buttons">
        {handleBackClick && <button onClick={handleBackClick}>Back</button>}
        <button onClick={handleNextClick} disabled={isDisabled}>
          {nextButtonText}
        </button>
      </div>
    </main>
  );
};

export default Formwrapper;
