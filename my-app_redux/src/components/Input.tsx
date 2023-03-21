import React from 'react'
import { useAppDispatch } from './../app/hooks';


const Input = () => {
    const dispatch = useAppDispatch()

    function handleTextChange(ec:any) {
        
    }
  return (
    <input type="text" id='inputExample' onInput={handleTextChange} />
  )
}

export default Input