import React from 'react'
// import { ImLocation2} from 'react-icons/im';
import { BiMap } from "@react-icons/all-files/bi/BiMap";

function Footer() {
  return (
    <>
        <div className='row container-fluid p-5' style={{backgroundColor:"gray"}}>
            
          <div className='col-4 p-5'>
              <span className='text-warning'>ABOUT US</span> <br/> <br/>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. Corrupti dolorum, sint corporis <br/> nostrum, possimus unde eos vitae eius quasi <br/>saepe.</p> <br/> <br/>
              <span>—— © 2023 CODELESS. ALL RIGHTS RESERVED</span>
          </div>
          <div className='col-4 p-5'>
               <span className='text-warning'>CONTACT INFO</span><br/><br/>
               <span className=''><BiMap/> Altschul, Los Angeles, CA 10027- <br/>
               0000</span><br/><br/>
               <span className='bi bi-telephone'> +1 987 654 3210</span><br/><br/>
               <span className='bi bi-envelope-fill text-warning'> admin@domain.com</span>

          </div>
          <div className='col-4 p-5'>
              <span className='text-warning'>OPENING HOURS</span> <br/> <br/>
              <span>MONDAY - THURSDAY <br/>
             10:00 AM - 11:00 PM</span><br/> <br/>
             <span>FRIDAY - SUNDAY <br/>
            12:00 AM - 03:00 AM</span>
          </div>
          </div>
    </>
  )
}

export default Footer
