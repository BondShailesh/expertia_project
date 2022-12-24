import React from 'react'

function CustomButton({innerText,handleClick}) {
    return (
        <div>
        <button
       className='border-opacity-50 border-2 rounded-lg
       lg:w-[345px] lg:h-[43px] mb-[13px] w-[280px] h-[50px] mt-[21px]
        bg-black text-white'
        onClick={()=>handleClick()}>{innerText} </button>
        </div>
    )
}

export default CustomButton