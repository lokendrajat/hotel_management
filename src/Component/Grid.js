import React from 'react'
import Footer from './Footer';
import Header from './Header'

function Grid() {
  return (
    <>
    <div class='bg-dark'>
        <Header/>
      
      <div class=' G-c text-center p-5 mt-4'>
        <h2 class='G-c1  p-4 fw-bold '>Grid & Columns</h2>
        <p class='mb-5'>With Picante you can create from simple to advanced layouts with a responsive Grid System.<br/>

You can control spaces in page, just drag spaces between columns. Also, you can add shadows, colors,<br/>

background image, opacity etc. Create custom layouts for various viewport sizes.<br/>

The last, you can add animations and delays on each column.</p>
      </div>

      <div class='G-c2 p-4 mt-4 '>
        <h2 class='text-center pb-4'>Fullwidth Grid System</h2>
      </div>

      <div class='G-c3 mt-5 pb-5 '>
        <h2 class='m-4  fs-1'>1/1</h2>
        <p class=' m-4 G-c4  '>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel <br/>
         the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of <br/>
          mere tranquil existence, that I neglect my talents.</p>
      </div>

      <div class='row G-c5'>
        <div class='col-6 mt-4 mb-4'>
             <h2 class='m-4  fs-1'>1/2</h2>
             <p class=' m-4 G-c4  '>A wonderful serenity has taken possession of my entire soul, like these <br/>
              sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
              and feel the charm of existence in this spot, which was created for the <br/>
              bliss of souls like mine. I am so happy, my dear friend, so absorbed in the <br/>
               exquisite sense of mere tranquil existence, that I neglect my talents.</p>
        </div>

        <div class='G-c6 col-6  pt-4'>
              <h2 class='m-4  fs-1'>1/2</h2>
              <p class=' m-4 G-c4  '>A wonderful serenity has taken possession of my entire soul, like these <br/>
              sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
              and feel the charm of existence in this spot, which was created.</p>
        </div>
      </div>

      <div class='row  G-c7'>
        <div class='col-4  pt-4 pb-4'>
          <h2 class='m-4  fs-1'>1/3</h2>
          <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul,<br/>
           like these sweet mornings of spring which I enjoy with my whole heart. I am alone,<br/>
            and feel the charm of existence in this spot, which was created for the bliss of souls<br/>
             like mine.</p>
        </div>

        <div class='col-4 G-c8 pt-4 pb-4'>
        <h2 class='m-4  fs-1'>1/3</h2>
          <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul, <br/>
          like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
          and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
          like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil<br/>
           existence, that I neglect my talents.</p>
       </div>

       <div class='col-4 G-c8 pt-4 pb-4'>
       <h2 class='m-4  fs-1'>1/3</h2>
          <p class=' m-4  '>A wonderful serenity has taken possession of my entire soul,<br/>
           like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
           and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
            like mine.</p>
       </div>
      </div>



      <div class='row  G-c7'>
        <div class='col-3  pt-4 pb-4'>
          <h2 class='m-4  fs-1'>1/4</h2>
          <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul,<br/>
           like these sweet mornings of spring which I enjoy with my whole heart. I am alone,<br/>
            and feel the charm of existence in this spot, which was created for the bliss of souls<br/>
             like mine.</p>
        </div>

        <div class='col-3 G-c8 pt-4 pb-4'>
        <h2 class='m-4  fs-1'>1/4</h2>
          <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul, <br/>
          like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
          and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
          like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil<br/>
           existence, that I neglect my talents.</p>
       </div>

       <div class='col-3 G-c8 pt-4 pb-4'>
       <h2 class='m-4  fs-1'>1/4</h2>
          <p class=' m-4  '>A wonderful serenity has taken possession of my entire soul,<br/>
           like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
           and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
            like mine.</p>
       </div>
       <div class='col-3 G-c8 pt-4 pb-4'>
       <h2 class='m-4  fs-1'>1/4</h2>
       <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul, <br/>
          like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
          and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
          like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil<br/>
           existence, that I neglect my talents.</p>
       </div>
      </div>


      <div class='row  G-c7'>
        <div class='col-2  pt-4 pb-4'>
          <h2 class='m-4  fs-1'>1/6</h2>
          <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul,<br/>
           like these sweet mornings of spring which I enjoy with my whole heart. I am alone,<br/>
            </p>
        </div>

        <div class='col-2 G-c8 pt-4 pb-4'>
        <h2 class='m-4  fs-1'>1/6</h2>
          <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul, <br/>
          like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
          and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
          like mine.</p>
       </div>

       <div class='col-2 G-c8 pt-4 pb-4'>
       <h2 class='m-4  fs-1'>1/6</h2>
          <p class=' m-4  '>A wonderful serenity has taken possession of my entire soul,<br/>
           like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
           </p>
       </div>
       <div class='col-2 G-c8 pt-4 pb-4'>
       <h2 class='m-4  fs-1'>1/6</h2>
       <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul, <br/>
          like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
          and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
          like mine.</p>
       </div>
       <div class='col-2 G-c8 pt-4 pb-4'>
       <h2 class='m-4  fs-1'>1/6</h2>
          <p class=' m-4  '>A wonderful serenity has taken possession of my entire soul,<br/>
           like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
          </p>
       </div>
       <div class='col-2 G-c8 pt-4 pb-4'>
       <h2 class='m-4  fs-1'>1/6</h2>
       <p class=' m-4 ' >A wonderful serenity has taken possession of my entire soul, <br/>
          like these sweet mornings of spring which I enjoy with my whole heart. I am alone, <br/>
          and feel the charm of existence in this spot, which was created for the bliss of souls <br/>
          like mine.</p>
       </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Grid;
