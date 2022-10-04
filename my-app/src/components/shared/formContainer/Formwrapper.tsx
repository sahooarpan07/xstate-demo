import { FormWrapperProps } from "./types";
import './formWapper.css'
const FormWrapper = (props:FormWrapperProps) => {
    const { nextButtonText = "Continue" , handleBackClick , handleNextClick , children } = props;
  
    return (
        <main className="form-wrapper">
        <div className="form-data">{children}</div>
        <div className="form_navigate-buttons">
          <button onClick={handleBackClick}>Back</button>
          <button onClick={handleNextClick}>{nextButtonText}</button>
        </div>
      </main>
  )
}

export default FormWrapper