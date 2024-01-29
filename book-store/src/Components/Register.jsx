import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Register = () => {
  let [signup,setSignup] = useState(false)
  let {register,
  handleSubmit,
formState:{errors},} = useForm()
let onSubmit=(el)=>{
  setSignup(true)
  console.log(register)
  console.log(register.field)
}

  return (
    <div>
      <h1>CREATE ACCOUNT</h1>
      <form action="" className='form' onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type="text" placeholder='Enter your name' name='fullName'{...register("fullName",{required:"Name is required", minLength:{value:3, message:"Name must be more than 3 characters"},maxLength:{value:30,message:"Name should be less then 30 characters"}})} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
        
        <input type="text" placeholder='Enter your email' name='Email'{...register("Email",{required:"Email is required",pattern:{value:/^\S+@+$/i,message:"Invalid Email @ is required"}})} />
        {errors.Email && <p>{errors.Email.message}</p>}
        
        
        <input className='submitbtn' type="submit" value="submit" />

      </form>
    </div>
  )
}

export default Register