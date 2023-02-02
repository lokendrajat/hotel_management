import React from 'react'
import Container from './Container';
import Facility from './Facility';
import Footer from './Footer';
import Header from './Header';


function Showcase() {
  return (
    <>
    <div class='bg-dark container-fluid m-0 p-0'>
      <Header/>
      
      <div class='showcase-1'>
        <h2 class='showcase-c1' >GET INSPIRED  <span class='text-warning'> & CREATE</span></h2>
         <p class='showcase-c2' >There are more than <span class='text-white fs-3'>400 sites</span> created with <span class='text-white fs-3 '> JAAT restaurant </span> WordPress.<br/>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Check some of the amazing websites created <span class='text-white fs-3 '> with JAAT</span>.<br/>
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; It’s time to build your website</p>
      </div>
     
    </div>
       <Facility/>
      <Container/>
      <Footer/>
    </>
  )
}

export default Showcase;
