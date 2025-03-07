import "./GreetingForm.css"
import React, { useState } from 'react'
import axios from 'axios'
const GreetingForm = () => {
    const [name,setName]=useState("")
    const [message,setMessage]=useState("")
    const API_URL = import.meta.env.VITE_API_URL; //backend api url

    const handleGreeting=async()=>{
        if(!name){
            setMessage("Error:Name is required")
            return
        }
        try {
            const response = await axios.get(`${API_URL}/api/greet`,{
                params:{name}   //get name from paramenter
            })
            setMessage(response.data.message )
            //console.log(response.data.message)
            setName("")
        } catch (error) {
           
            
            setMessage("Failed to fetch greeting.")
            
        }

    }
  return (
    <div className="greeting-form-container">
      <h1>Greeting Form</h1>
      <input
      type='text'
      placeholder='Enter your name ...'
      value={name}
      onChange={e=>setName(e.target.value)}
      />
      <button onClick={handleGreeting}>Get Greeting</button>
      <p>{message}</p>
    </div>
  )
}

export default GreetingForm
