import React from 'react'
import discussionImage from "../../assets/discussion.jpg"
import Image from 'next/image'

function Login() {
  return (
    <div className='flex justify-center h-[100vh]'>
      {/* <input className="bg-gray-200 
      appearance-none border-2 border-gray-200 
      rounded w-half 
      py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white 
      focus:border-purple-500" id="inline-password" 
      type="password" placeholder="******************" /> */}

      <div className='lg:ml-[170px] mt-[50px]   
      lg:w-[420px] lg:h-[535px] lg:pl-[27px]
      border-2 rounded-xl       
      w-[326px] pl-[22px]  h-[565px]'>

        <p className='w-[132px] h-[38px] 
        mt-[30px] 
        lg:text-xl text-l
        leading-[38px] '>Welcome !</p>

        <h2 className='text-[31px]  font-medium leading-[35px] mt-[15px]'>Sign in to</h2>

        <p className='leading-[24px] mt-[7px]'>Lorem lpsum is simply</p>

       {/* Two input box and label for input box are below */}
        <p className='leading-[24px] mt-[25px] mb-[8px]'>Email</p>
        <input className='border-opacity-50 border-2 rounded-lg
        lg:w-[345px] h-[40px] pl-[20px] w-[280px]
        focus:outline-none focus:bg-white focus:border-purple-900'
          placeholder='Enter your email'
          type='email' />

        <p className='leading-[24px] mt-[25px] mb-[8px]'>Password</p>
        <input className='border-opacity-50 border-2 rounded-lg
        lg:w-[345px] h-[40px] pl-[20px] w-[280px]
       focus:outline-none focus:bg-white focus:border-purple-900 '
          placeholder='Enter your Password'
          type='password' />
          <br />
         {/* Remember me Forgot password section */}
         <div className='mt-[12px]'>
         <input type='checkbox' />
          <label className='ml-[10px]'>Remember me</label>
          <span className='lg:ml-[100px] ml-[40px]'>Forgot Password</span>
          </div>
         <br/>
        <button
          className='border-opacity-50 border-2 rounded-lg
       lg:w-[345px] lg:h-[43px] mt-[5px] mb-[13px] w-[280px] h-[50px]
        bg-black text-white'>Login</button>
         
         <div className='text-center mt-[15px]'>
        <p className='text-gray-500'>Don't have an account ?
          <span className='text-black font-medium  cursor-pointer'> Register</span>
        </p>
        </div>

      </div>

{/* Guys discussion image on right side for large screen */}
      <div>
        <Image
          className='mt-[50px] lg:block hidden h-[600px]'
          src={discussionImage}
          alt="image error"
        />
      </div>

    </div>
  )
}

export default Login