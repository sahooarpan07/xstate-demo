import React from 'react'
import './shippingAddress.css'
const ShippingAddress = ({ shippingAddress , handleShippingAddressChange }) => {
const { streetAddress='',
city='',
zipCode='' } = shippingAddress
return (
<section className='shipping-address-container'>
<h5>What is shipping address ? </h5>
<input type={"text"} value={streetAddress} placeholder={"Street Address"}
onChange={e=>{
    const updatedAddress = {
        ...shippingAddress,
        streetAddress:e.target.value
    }
    handleShippingAddressChange(updatedAddress)
}}
/>

<input type={"text"} value={city} placeholder={"City"}
onChange={e=>{
    const updatedAddress = {
        ...shippingAddress,
        city:e.target.value
    }
    handleShippingAddressChange(updatedAddress)
}}
/>
<input type={"text"} value={zipCode} placeholder={"Zip code"}
onChange={e=>{
    const updatedAddress = {
        ...shippingAddress,
        zipCode:e.target.value
    }
    handleShippingAddressChange(updatedAddress)
}}
/>


</section>
    )
}

export default ShippingAddress