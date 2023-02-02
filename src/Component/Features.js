import React from 'react'
import Container from './Container';
import Footer from './Footer';
import Header from "./Header";


function Features() {
  return (
    <>
    <div  className="container-fluid bg-dark text-white">
      <Header />

     <div className='faetur-1'>
      <p className='feature-content'>  &nbsp; &nbsp; &nbsp; We designed Picante Restaurant WordPress Theme to make it <br/>
      &nbsp;  &nbsp; work perfectly especially for Cafe & Restaurant websites. Find out <br/>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; more why you should choose Picante Theme.</p>
     </div>

     <div class='row m-5 p-4'>
        <div class='col-4'>
       <h6 class='text-muted pb-2'>MENU LAYOUTS </h6>
      <h3 class='fs-1 '>Various Amazing <br/>
      <span class='text-warning '> Food Menu </span> Layouts</h3>
     <p class='fs-5 p-2 text-secondary'>Build Amazing Food Menu Pages and Sections or use our predefined Content-Blocks to create an impressive Food Menu Page.</p>
        </div>

        <div class='col-4'>
       <h6 class='text-muted pb-2'> SELL ONLINE</h6>
        <h3 class='fs-1 '> Create
        <span class='text-warning  '> Food <br/>
         Delivery </span>
          Service</h3>
       <p class='fs-5 p-2 text-secondary'>Start today with Picante to sell online products with your Restaurant or Food Website. Start to make money with your website.</p>
        </div>

       <div class='col-4'>
         <h6 class='text-muted pb-2'> PARALLAX EFFECT </h6>
          <h3 class='fs-1 '> Smoothest <span class='text-warning  '> Parallax </span> Scrolling Effect</h3>
        <p class='fs-5 p-2 text-secondary'> GPU Accelerated Animations are included with Picante WP Theme. Create not only functional site but an outstanding beautiful one!</p>
       </div>
      </div>

     <Container/>
     
     <div class='row m-5 p-3'>
      <div class='col-4 p-2'>
      
      <h5 class='p-1 m-1'>FRONT-END & BACK-END  </h5>
       <h5 class='p-1 m-1'> &nbsp; &nbsp; &nbsp;  PAGE BUILDER</h5>
      <p class='p-3 m-2 fs-6 text-secondary'>Page builder + shortcodes manager + shortcode lists “it is easy to create your layout with the way you love” </p>
      </div>

       <div class='col-4 p-2'>
          
          <h5 class='p-1 m-1'>WOOCOMERCE READY </h5>
          <h5 class='p-1 m-1'> &nbsp; &nbsp; FULLY COMPATIBLE</h5>
          <p class='p-3 m-2 fs-6 text-secondary'>Fully compatible with WooCommerce for your online shop! Product overviews, product pages, cart etc. </p>
       </div>

       <div class='col-4 p-2'>

           <h5 class='p-1 m-1'>ALL-POWERFUL THEME </h5>
           <h5 class='p-1 m-1'>OPTIONS PANEL</h5>
          <p class='p-3 m-2 fs-6 text-secondary'>Extended powerful theme options panel, which allows you to customize just anything in an appearance of your website with few clicks.</p>
       </div>
     </div>
      
    
    <div class='row m-5 p-3'>
      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>RESPONSIVE &</h5>
        <h5 class='p-1 m-1'>RETINA READY</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>Fully responsive and retina ready. It can automatically adapt to different screen sizes, no matter which device you use. </p>
      </div>

      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>SEO OPTIMIZED &</h5>
        <h5 class='p-1 m-1'>CLEAN CODE</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>– Proper use of headings

– SEO friendly images

– Clean code

– Google analytics integration

– Facebook, Google+, Twitter </p>
      </div>

      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>PREMIUM SUPPORT &</h5>
        <h5 class='p-1 m-1'>FREE UPDATES</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>We are ready to answer all of your questions and assist you by solving any difficulties as soon as possible. We deliver Picante with very detailed documentation.</p>
      </div>
    </div>




    <div class='row m-5 p-3'>
      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>UNLIMITED HEADERS</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>Create custom headers for your layouts. Assign a header to a layout or specify a custom header for any page or post as needed.</p>
      </div>

      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>UNLIMITED COLORS</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>You can easily change any colors of almost any website elements you need. Picante offers all options with live preview.</p>
      </div>

      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>FONT ICONS</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>Create custom headers for your layouts. Assign a header to a layout or specify a custom header for any page or post as needed.</p>
      </div>
    </div>



    <div class='row m-5 p-3'>
      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>ONLINE RESERVATION</h5>
        <h5 class='p-1 m-1'>FORM</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>Create beautiful online reservation forms. So, your clients can make a table reservation directly from your website, online.</p>
      </div>

      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>TRANSLATION-READY -</h5>
        <h5 class='p-1 m-1'>MULTILINGUAL</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>Make your next Restaurant Website Multilingual, in this way it will be more accessible to clients worldwide.</p>
      </div>

      <div class='col-4 p-2'>
        
        <h5 class='p-1 m-1'>LIGHTBOX GALLERY</h5>
        <p class='p-3 m-2 fs-6 text-secondary'>Build a beautiful gallery and give users the possibility to show them as a lightbox for a better user-experience.</p>
      </div>
    </div>

    
   
    </div>
    <Container/>
    <Footer/>
    </>
  )
}

export default Features;
