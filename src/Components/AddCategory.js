import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}  ) => {
    const [inputValue, setInputValue] = useState(' ');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        if (inputValue.trim().length>2 ){
             setCategories(categ=>[inputValue,...categ,]);
        }

       
    }
    return (
        <form onSubmit={handlesubmit}>
            <input
            type=" Text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
            
    )
}
AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired // haciendo referencia al paquiete que inportarmos
}