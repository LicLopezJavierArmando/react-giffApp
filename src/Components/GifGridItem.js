
import React from 'react'

export const GifGridItem = ({title,url}) => {// recibo una imagen o un gif
    return (
        
             <div className= "card animate__animated animate__fadeIn">
                 
                 <img src= {url} alt={title}/>
                 <p> {title} </p>
            </div>
             )
}
