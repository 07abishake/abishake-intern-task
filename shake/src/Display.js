import React from "react";
import DisplayCard from './displayCard.jsx';




const Display=(props)=>{
    return(
        <div className="Display">
            {
            props.data.Map((data,index)=>{
                return(
                    <DisplayCard key={index}name={data.name} email={data.email} phone={data.phone} age={data.age} address=
                    {data.address}/>

                )
            })
            }
        </div>
    )
        }
    
export default Display;