import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();


  return (
    <div
      className='d-flex justify-content-evenly'
    >
      <button onClick={() => { navigate('/loginUser') }} className='m-5'>
        <h3>Enter as a User</h3>
        <img alt='Enter as a User' src='https://res.cloudinary.com/dbjxvogfh/image/upload/v1704704125/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2024-01-08_105511_mqvh2o.png' />
      </button>
      <button onClick={() => { navigate('/loginOwner') }} className='m-5'>
        <h3>Enter as a Owner</h3>
        <img alt='Enter as a Owner' src='https://res.cloudinary.com/dbjxvogfh/image/upload/v1704704651/manager_owk7tk.png' />
      </button>
      {/* <button onClick={()=>{}}>Enter for me</button>
        <button onClick={()=>{navigate('/contactUs')}}>Contact Us</button> */}
    </div>
  )
}
