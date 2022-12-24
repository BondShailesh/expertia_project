import React, { useState } from 'react'

function CustomInput({placeholderValue,typeValue,handleChange,name}) {

    
    return (
        <div>
        <input className='border-opacity-50 border-2 rounded-lg
        lg:w-[345px] h-[40px] pl-[20px] w-[280px]
        focus:outline-none focus:bg-white focus:border-purple-900'
        placeholder={placeholderValue}
        type={typeValue} 
        name={name}
        onChange={(e)=>handleChange(e)}/>
        </div>
    )
}

export default CustomInput