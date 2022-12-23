import React, { useEffect } from 'react'
import Input from './Input'

export default function Dashboard() {
    const arr = [1,2,3,8,9];
    useEffect(()=>{

    },[])
  return (
    <div className=''>
        <div className='lg:w-[400px] lg:h-[540px] w-[329px] h-[550px]
        mt-[60px] p-[30px]
        mx-auto
        border-2 rounded-xl 
        '>
            <p className='text-xl'>Hello</p>
            
            <h1 className='font-medium text-2xl leading-[45px]'>Random Guy</h1>

            <p className='leading-[24px] mt-[23px] mb-[23px]'>Good to see you here</p>

            <p className='leading-[24px] font-bold mb-[20px]'>Tasks for <span>24Dec,2022:</span></p>
        
        {arr.map((el)=>(
            <li key={el}> Do your fucking work</li>
        ))}
        
        <div className='relative bottom-[-50px]'>
            <div>
              <Input placeholderValue='Eg. Need to finish assig...' typeValue='text'/>
        {/* <input className='border-opacity-50 border-2 rounded-lg
        lg:w-[345px] h-[40px] pl-[20px] w-[280px]
        focus:outline-none focus:bg-white focus:border-purple-900'
          placeholder='Eg. Need to finish assig...'
          type='email' /> */}
          </div>

        <div>
       <button 
          className='border-opacity-50 border-2 rounded-lg
       lg:w-[345px] lg:h-[43px] mt-[18px] mb-[13px] w-[280px] h-[50px]
        bg-black text-white'>Add New Task</button>
        </div>

        
        <div className='flex justify-center'><button >Logout</button></div>
        </div>

        </div>
    </div>
  )
}

//  default Dashboard

  export const getServerSideProps = async()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    data = await data.json()
    console.log(data,"fgfd");
    return {
      props: {name:data}   
    }
    }