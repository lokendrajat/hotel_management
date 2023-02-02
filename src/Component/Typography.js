import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Typography() {
  return (
   <>
   <div class='bg-dark'>
        <Header/>
       <div class='typod mt-4 p-4 m-4'>
        <h2 class='p-2'>Heading Semantic</h2>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>
        
       <div class='typod mt-4 p-4 m-4'>
        <h2 class='p-2 fs-1 fw-bold'>With Custom Size</h2>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <div class='typod mt-4 p-4 m-4'>
        <h2 class='p-2 fs-2' >With Custom Font</h2>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <div class='typod mt-4 p-4 m-4'>
        <h2 class='p-2 fw-lighter'>Light Weight</h2>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <div class='typod mt-4 p-4 m-4'>
        <h5 class='p-2 text-uppercase'>UPPERCASE</h5>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <div class='typod mt-4 p-4 m-4'>
        <h2 class='p-2 text-primary'>Custom Color</h2>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <div class='typod mt-4 p-4 m-4'>
        <h4 class='p-2'> &nbsp; &nbsp; &nbsp; With Inline Icon</h4>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <div class='typod mt-4 p-4 m-4'>
        <h2 class='p-2'>Parallel Divider  &nbsp; &nbsp; <strike class='text-secondary'>  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; </strike></h2>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <div class='typod mt-4 p-4 m-4'>
       <span class='p-2 fw-bold fs-4 text-bg-danger'>WITH BACKGROUND</span>
        <p class='typop'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et <br/>
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
       </div>

       <Footer/>
    </div>
    </>
  )
}

export default Typography
