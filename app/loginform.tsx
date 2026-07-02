"use client"

import { useMutation } from '@apollo/client/react'
import React, { useState } from 'react'
import { LOGIN } from './resolvers'

interface response{
    adduser1:{
        success:boolean,
        message:string
    }
}




const Page = () => {
  const[field,setfield]=useState({name:"",email:"",password:""})
  const[Login,{data,loading,error}]=useMutation<response>(LOGIN)

const handlefield=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setfield({
...field,[e.target.name]:e.target.value

})
}

const handlesubmit=async(e:React.FormEvent)=>{
e.preventDefault()
try{
const response=await Login({
    variables:{
      name:field.name,
        email:field.email,
        password:field.password
    }
})


if(response.data?.adduser1.success){
    alert("user added")
}
}catch(err){
    console.log(err)
    alert("add user failed")
}
}




  return (
    <div>
        <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder='Nmae' autoComplete='true' value={field.name} onChange={handlefield} />
      <input type="email" name="email" placeholder='Email' autoComplete='true' value={field.email} onChange={handlefield} />
      <input type="password" name="password" placeholder='Password' value={field.password} onChange={handlefield} />
      <button>Login</button>
      </form>
    </div>
  )
}

export default Page
