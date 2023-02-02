import React from 'react'
import { Link } from 'react-router-dom'
import mainimg from '../Image/homeimage.avif';
import Pbtn from './Pbtn'
import Scrollbtn from './Scrollbtn'

function Header() {
  return (

      <>
     <div className="main d-flex flex-wrap" style={{position:'relative'}}>
      <img src={mainimg} className="w-100" style={{height:"550px"}}></img>
      <div style={{position:"absolute" ,top:'0px'}}>
      <ul class="nav">
      <li class="nav-item">
       <Link to="/" className='anchor-link'>DEMO</Link>
       </li>
      <li class="nav-item">
        <Link to="/features" className='anchor-link'>FEATURES</Link>
      </li>
      <li class="nav-item ">
        <a href="Showcase" className='anchor-link'>SHOWCASE</a>
      </li>
      <div class="dropdown ">
      <li class="nav-item ">
          <button class="dropbtn">ELEMENTS</button>
          <div class="dropdown-content">
            <Link to="/grid" className='anchor-link'>Grid & Colum</Link>
            <Link to="/typography" className='anchor-link'>Typography</Link>
            <Link to="/menu" className='anchor-link'>Menu & ELEMENT</Link>
            <Link to="/reservation" className='anchor-link'>Reservation Form</Link>
            <a href="">Testimonals</a>
            <a href="">Gallery</a>
            <a href="">Service</a>
          </div> 
      </li>
      <div>
      </div>
      </div>
        <div className='mt-3 fs-4' style={{cursor:"pointer"}}>
        <span className='bi bi-whatsapp ps-5  text-success'> </span>
       <span className='bi bi-facebook ps-3 text-info'> </span>
       <span className='bi bi-instagram ps-3  '> </span>
       <span className='bi bi-twitter ps-3 text-info'> </span>
       <span className='bi bi-envelope-fill ps-3 text-light'> </span>
       </div>
     </ul>
     <div className="bigf ">
       <h1 className="bigf1">JAAT-PALACE</h1>
       <h6 className="bigf2">THE ULTIMATE RESTAURANT & CAFE THEME</h6>
       <Pbtn/>
     </div>
     <Scrollbtn/>
   </div>
   </div>
  </>
   
  )
}

export default Header
