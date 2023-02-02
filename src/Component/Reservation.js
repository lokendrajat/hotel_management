import React from 'react'
import Footer from './Footer'
import Header from './Header'
 import './Reservation.css';

function Reservation() {
  return (
    <>
    <Header />
    <div className='container-fluid text-center resform p-5'>
      <div>
       <h3 className='fw-bold pb-3 fs-1'>Make online reservation</h3>
       <p className='text-secondary  pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo <br/>
        praesentium sequi in cum, beatae maiores quae qui.</p>
      </div>
      <div class=" text-center ">
        <input placeholder='Full name' className='p-2 m-2 w-25' style={{border:"none"}}></input>
       <select className='p-2 m-2 w-25' style={{border:"none"}} >
        <option selected>2 person</option>
        <option value="1">3 person</option>
        <option value="2">4 person</option>
        <option value="3">5 person</option>
        <option value="3">6 person</option>
       </select>
      </div>
        
       
      <div class=" text-center ">
        <input placeholder='Phone Number' className='p-2 m-2 w-25 ' style={{border:"none"}}></input>
        <input type="date" value="2000-01-01" className='p-2 m-2 w-25 ' style={{border:"none"}} />

       
      </div>

      <div class=" text-center ">
        <input placeholder='Email Address' className='p-2 m-2 w-25 ' style={{border:"none"}}></input>
         <input type='time' value="18:00" className='p-2 m-2 w-25 ' style={{border:"none"}} />
      </div>
      <button className='p-3 mb-5 mt-3 reservbtn' >RESERV A TABLE</button>
   </div>
    </>
  )
}

export default Reservation
