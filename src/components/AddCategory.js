import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue(e.target.value)
    }

    //Manejar el Enter
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue , ...cats] );
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value= { inputValue }
                onChange = { handleInputChange }
                placeholder = { 'Insert text 😎' }
            />
        </form>
    )
}

//Regla PropType
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}