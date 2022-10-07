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
    <div className="container">
      <main className="form-container">
        <div className="form-wrapper">
          <div className="form-data">{children}</div>
          <div className="form_navigate-buttons">
            {handleBackClick && <button onClick={handleBackClick}>Back</button>}
            <button onClick={handleNextClick} disabled={isDisabled}>
              {nextButtonText}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Formwrapper;
