import React, { useState } from 'react'
import discussionImage from "../../assets/discussion.jpg"
import Image from 'next/image'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'
import { useRouter } from 'next/router'

function Login() {
  let [cred, setCred] = useState({})
  const router = useRouter()
  const handleChange = (e) => {
    let { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value
    })
  }

  const handleClick = async () => {
    try {
      let data = await axios.post("https://frail-blue-hippo.cyclic.app/login", cred)
      let token = JSON.stringify(data.data)
      localStorage.setItem('token', token)
      router.push('/')
    } catch (e) {
      return alert("Wrong Credential")
    }
  }

  const handleRegister = () => {
    router.push('/user/register')
  }
  return (
    <div className='flex justify-center h-[100vh]'>

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
        <CustomInput placeholderValue='Enter your email' typeValue='email' handleChange={handleChange} name="email" />

        <p className='leading-[24px] mt-[25px] mb-[8px]'>Password</p>
        <CustomInput placeholderValue='Enter your password' typeValue='password' handleChange={handleChange} name='password' />

        <br />
        {/* Remember me Forgot password section */}
        <div className='mt-[12px] mb-[-24px]'>
          <input type='checkbox' />
          <label className='ml-[10px]'>Remember me</label>
          <span className='lg:ml-[100px] ml-[40px]'>Forgot Password</span>
        </div>

        <br />

        <CustomButton innerText='Login' handleClick={handleClick} />

        <div className='text-center mt-[8px]'>
          <p className='text-gray-500'>Don&apos; have an account ?
            <span className='text-black font-medium  cursor-pointer' onClick={handleRegister}> Register</span>
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