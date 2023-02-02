import React from 'react'
import Footer from './Footer'
import Header from './Header'

function MenuElement() {
  return (
    <div class='bg-dark'>
        <Header/>
       
       <div class='row'>
        <div class='menus col-8  p-5 bg-white'>
          <h1 class='menuh '>Our <span class='text-warning'>Dinner</span></h1>
           <h6 class='pb-4 fs-5 text-secondary '>Weekdays  7:30 a.m. — 11:30 a.m.</h6>
           <h3>Eggs Any Style</h3>
           <h6 class='pb-4 fs-5 text-secondary fw-lighter'>with homefries & toast............................................................16.00</h6>
            <h3>Scrambled Eggs in Puff Pastry</h3>
            <h6 class='pb-4 fs-5 text-secondary fw-lighter'>with wild mushrooms and asparagus..................................16.00</h6>
            <h3>Eggs Benedict</h3>
            <h6 class='pb-4 fs-5 text-secondary fw-lighter'>with homefries..........................................................................22.00</h6>
            <h3>Eggs Norwegian</h3>
            <h6 class='pb-4 fs-5 text-secondary fw-lighter'>with homefries..........................................................................22.00</h6>
            <h3>Soft-Boiled Organic Egg</h3>
            <h6 class='pb-4 fs-5 text-secondary fw-lighter'>with “soldiers”..........................................................................5.00</h6>
        </div>
         <div class='menu2 col-4 pt-5'>
            <div class='menu3 text-center p-5'>
            <h3 class='menu4'>Dinner</h3>
             <h6>Weekdays  07:30 p.m. — 22:30 p.m.</h6>
            </div>

            <div class=' menu3 text-center p-5'>
            <h3 class='menu4'>Lunch</h3>
             <h6>Weekdays  12:30 p.m. — 03:30 p.m.</h6>
            </div>

            <div class='menu3 text-center p-5'>
            <h3 class='menu4 '>Breakfast</h3>
             <h6>Weekdays  08:30 a.m. — 10:30 a.m.</h6>
            </div>
         </div>


         <div>
         <div class='row p-5 text-white bg-dark '>
            <h1 class='menu5 text-center p-4 '>Our <span class='text-warning'>Breakfast</span></h1>
            <div class='col-6 p-4'>
            <h3>Eggs Any Style</h3>
           <h6 class='pb-4 fs-5  fw-lighter'>with homefries & toast............................................................16.00</h6>
            <h3>Scrambled Eggs in Puff Pastry</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with wild mushrooms and asparagus..................................16.00</h6>
            <h3>Eggs Benedict</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with homefries..........................................................................22.00</h6>
            <h3>Eggs Norwegian</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with homefries..........................................................................22.00</h6>
            <h3>Soft-Boiled Organic Egg</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with “soldiers”..........................................................................5.00</h6>
            </div>
      
            <div class='col-6 p-4'>
            <h3>Soft-Boiled Organic Egg</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with “soldiers”..........................................................................5.00</h6>
            <h3>Eggs Any Style</h3>
           <h6 class='pb-4 fs-5  fw-lighter'>with homefries & toast............................................................16.00</h6>
            <h3>Scrambled Eggs in Puff Pastry</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with wild mushrooms and asparagus..................................16.00</h6>
            <h3>Eggs Benedict</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with homefries..........................................................................22.00</h6>
            <h3>Eggs Norwegian</h3>
            <h6 class='pb-4 fs-5  fw-lighter'>with homefries..........................................................................22.00</h6>
            
            </div>
            </div>
            <div class='bg-dark pb-5 '>
            <button class='  btnnn '>VIEW DETAILS</button>
          
            </div>
         </div>
       </div>
       <Footer/>
    </div>
  )
}

export default MenuElement
