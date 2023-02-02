import React from 'react'
import './Purchase.css';
import Header from './Header';
import Footer from './Footer';
import { menuItems } from './menuitem';
function Purchase() {
  return (
    <div className='bg-dark text-white' >
        <Header/>
        <div className='conatainer-fluid '>
        <div class="row row-cols-2 row-cols-md-3 g-4 mt-5 card-main  "> 
        
      {
    menuItems.map((item)=>
   
    <div class="card-group text-dark  ">
    <div class="card ">
    <img src={item.image}  alt="imageone" />
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.desc}</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <h4 class='card-text text-primary text-end '>Price-{item.price}</h4>
      </div>
    </div>
    </div>

    )
  }

</div>
</div>
<Footer />
    </div>






  )
}

export default Purchase
