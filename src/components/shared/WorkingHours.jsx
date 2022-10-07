import React from 'react'

const WorkingHours = ({ workingDays , updateWorkingDays }) => {
  return (
    <>
    <h3>What are days & hours of operation</h3>
        {
            workingDays.map((day,position)=>{
                return <div className='shippingInfo_details'>
                <input
                type="checkbox"
                id={day.id}
                name={day.value}
                value={day.value}
                checked={day.isActive}
                onChange={()=>{
                    const updatedCheckedState = workingDays.map((item, index) =>
                    index === position ? {
                        ...item,
                        isActive:!day.isActive,
                        } : item
    );
    updateWorkingDays(updatedCheckedState);

                }}
                key={day.id}
                />
                <p>{day.value}</p>
                {
                    !day.isActive && <p>Closed</p>
                }
                {
                    day.isActive && (
                    <div className={"time-input"}>
                    <input type={"text"}  
                    value={day.operationTiming}
                    onChange={e=>{
                        const updatedOperatingTimings = workingDays.map((item, index) =>
                        index === position ? {
                            ...item,
                            operationTiming:e.target.value
                        } : item
        );
    
        updateWorkingDays(updatedOperatingTimings); 
                    }}
                    />
                    </div>
                    )
                
                }
                </div>
            })
        }

    </>
  )
}

export default WorkingHours