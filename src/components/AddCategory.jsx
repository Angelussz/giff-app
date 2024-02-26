import React, { useState } from 'react'
import PropTypes from'prop-types'
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1)return;
        onNewCategory(inputValue.trim())
        setInputValue("")
    }
    return (
    <form onSubmit={onSubmit} aria-label='form' >
        <input type="text" placeholder='Buscar gifs' value={inputValue} onChange={onInputChange}/>
        <button type='submit'>Agregar gilft</button>
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory:PropTypes.func.isRequired
}