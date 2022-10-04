import { useContext } from 'react'
import { NewAccountContext } from '../context/Context'
import DetailsContainer from './shared/DetailsContainer'
import './accountType.css'
import { useNavigate } from "react-router-dom";
const Summary = () => {
    const { state , send } = useContext(NewAccountContext);
    const { context:{ buisnessInformation:{
        contactDetails: {
            firstName= "",
            lastName= "",
            email= "",
            phoneNum= "",
          },
        buisnessDetails :{ buisnessName = "" , buisnessId="" } } , 
        paymentInformation: {
            paymentMethod = "",
            bankDetails :{
              accountNumber= "",
              bankName= "",
            },
          }
    } } = state;

    const navigate = useNavigate()

    
    
  return (
    <>
    <DetailsContainer
    title={"Buisness Info"}
    handleEditClick={()=>{
        send("EDIT_BUISNESS_INFO")
        navigate("/buisInfo")
    }}>
    <div className='data-cotainer'>
    <section aria-label='contact-info'>
    <h5>Your Contact Info</h5>
    <p>{firstName} {lastName}</p>
    <p>{phoneNum}</p>
    <p>{email}</p>
    
    </section>

    <section aria-label='buisness-info'>
    <h5>Buisness Details</h5>
    {buisnessName && <p>{buisnessName}</p>}
    {buisnessId && <p>{buisnessId}</p>}
    
    </section>
    
    </div>    
    </DetailsContainer>

    <DetailsContainer
    title={"Payment Information"}
    handleEditClick={()=>{
        send("EDIT_PAYMENT_INFO")
        navigate("/capturePaymentInfo")
    }}>
    <div className='data-cotainer'>
    <section aria-label='payment-method-info'>
    <h5>Payment Method</h5>
    <p>{paymentMethod}</p>
    
    </section>

    <section aria-label='bank-details'>
    <h5>Bank Details</h5>
    <p>{accountNumber}</p>
    <p>{bankName}</p>
    </section>
    
    </div>    
    </DetailsContainer>
    <div className="button-container">
        <button onClick={()=>{
                send("BACK")
                navigate("/capturePaymentInfo")
        }}>
            Back
        </button>
    </div>
    </>
  )
}

export default Summary