interface RadioButtonItem{
    label:string;
    value:string;
}

interface FormRadioInputGroupProps<>{
    radioItems:RadioButtonItem[];
    header:string;
    selectedItem:string | number;
    handleChange:(value:string)=>void;
}


export type { FormRadioInputGroupProps }