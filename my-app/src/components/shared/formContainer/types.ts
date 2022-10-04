
interface FormWrapperProps {
    children:React.ReactNode;
    handleBackClick:()=>void;
    handleNextClick:()=>void;
    nextButtonText?:string;

}
export type { FormWrapperProps }