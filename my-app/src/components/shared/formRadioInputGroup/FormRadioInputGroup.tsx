import { FormRadioInputGroupProps } from "./types";

const FormRadioInputGroup = (props:FormRadioInputGroupProps) => {
  const { radioItems =[] , header , selectedItem , handleChange } = props
  return (
    <>
    <h1>{header}</h1>
    {
    
    radioItems.map((item, index) => {
      const { label, value } = item;
      return (
        <>
          <div className="radio-items__container">
            <div className="radio-item">
              <input
                type={"radio"}
                value={value}
                checked={value === selectedItem}
                onChange={()=>handleChange(value)}
                key={index}
              />
              {label}
            </div>
          </div>
        </>
      );
    })}
    </>
  )
}

export default FormRadioInputGroup