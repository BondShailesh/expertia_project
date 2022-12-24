import React, { useState } from 'react'
import discussionImage from "../../assets/discussion.jpg"
import Image from 'next/image'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'
import { useRouter } from 'next/router'

 export default function Register() {
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

    let obj = {
      password: cred.password,
      userName: cred.userName,
      email: cred.email
    }
    try {
      if (cred.password === cred.confirmPassword) {
        const data = await axios.post("https://frail-blue-hippo.cyclic.app/signup", obj)

        if (data.data.index == 0) {
          return alert("Email alreaady exist plese login")
        }

        let token = JSON.stringify(data.data)        
        localStorage.setItem('token', token)
        router.push('/')
      } else {
        alert("password does not match")
      }
    }
    catch (e) {
      console.log(e.message);
    }
  }

  const handleLogin = ()=>{
    router.push('/user/login')
  }

  return (
    <div className='flex justify-center h-[100vh]'>

      <div className='lg:ml-[170px] mt-[50px]   
      lg:w-[415px] lg:h-[555px] lg:pl-[27px]
      border-2 rounded-xl       
      w-[326px] pl-[22px]  h-[565px]'>

        <p className='w-[132px] h-[38px] 
        mt-[7px] 
        lg:text-xl text-l
        leading-[30px] '>Welcome !</p>

        <h2 className='text-[31px]  font-medium leading-[35px]'>Sign up to</h2>

        <p className='leading-[24px]'>Lorem lpsum is simply</p>

        {/* Four input box and label for input box are below */}
        <p className='leading-[24px] mt-[13px] mb-[6px]'>Email</p>
        <CustomInput placeholderValue='Enter your email' typeValue='email' handleChange={handleChange} name="email" />

        <p className='leading-[24px] mt-[13px] mb-[6px]'>User name</p>
        <CustomInput placeholderValue='Enter your username' typeValue='text' handleChange={handleChange} name="userName" />

        <p className='leading-[24px] mt-[13px] mb-[6px]'>Password</p>
        <CustomInput placeholderValue='Enter your password' typeValue='password' handleChange={handleChange} name='password' />

        <p className='leading-[24px] mt-[13px] mb-[6px]'>Confirm Password</p>
        <CustomInput placeholderValue='Confirm your password' typeValue='password' handleChange={handleChange} name='confirmPassword' />

        <CustomButton innerText='Register' handleClick={handleClick} />

        <div className='text-center'>
          <p className='text-gray-500'>Already have an account ?
            <span className='text-black font-medium  cursor-pointer' onClick={handleLogin}> Login</span>
          </p> </div>
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
