import React from 'react'
import { Link } from 'react-router-dom';

function Pbtn() {
  return (
        <div>
        <button class='btnn '>
        <Link to="/purchase"  className='anchor-link' > PURCHASE NOW</Link>
           <span class='first'></span>
           <span class='second'></span>
           <span class='third'></span>
           <span class='fourth'></span>
           </button>
    </div>
  )
}

export default Pbtn
