import React from 'react'
import './detailsContainer.css'
const DetailsContainer = ({title , handleEditClick , children}) => {
  return (
    <>
    <section className='details-container__header'>
        <h2>{title}</h2>
        <button className='edit-button' onClick={handleEditClick}>Edit</button>
        

    </section>
    <div className='details-container__content'>
            {children}

        </div>
    </>

  )
}

export default DetailsContainer