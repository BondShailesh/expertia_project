import React from 'react'

function Input({placeholderValue,typeValue}) {
    return (
        <div>
        <input className='border-opacity-50 border-2 rounded-lg
        lg:w-[345px] h-[40px] pl-[20px] w-[280px]
        focus:outline-none focus:bg-white focus:border-purple-900'
        placeholder={placeholderValue}
        type={typeValue} />
        </div>
    )
}

export default Input