import React from 'react'
import ImageOne from "../Image/image-1.jpg";
import Imagetwo from "../Image/image-2.jpg";
import Imagethree from "../Image/image-3.jpg";
import Imagefour from "../Image/image-4.jpeg";
import Imagefifth from "../Image/image-5.jpg";
import Imagesix from "../Image/image-6.jpg";
import Imagesevanth from "../Image/image-7.avif";
import Imageeight from "../Image/image-8.jpg";
import Imagenine from "../Image/image-9.jpg";
import Imageelevan from "../Image/image-11.jpg";
import Imagetwelva from "../Image/image-12.webp";
import Imagethirteen from "../Image/image-13.jpg";
import Footer from './Footer';
function Facility() {
  return (
    <>
    <div>
      
      <div className="row">
          <div className="col-4">
            <img src={ImageOne} className="emg" alt="imageone" />
            <h5 className="emg-t">CLASSIC BAR & RESTAURANT</h5>
          </div>
          <div class="col-4">
            <img src={Imagetwo} className="emg" alt="" />
            <h5 className="emg-t">CHEF (ELEMENTOR)</h5>
          </div>
          <div className="col-4">
            <img src={Imagethree} className="emg" alt="" />
            <h5 className="emg-t">ORGANIC</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src={Imagefour} className="emg" alt="imageone" />
            <h5 className="emg-t">COFEE</h5>
          </div>
          <div className="col-4">
            <img src={Imagefifth} className="emg" alt="" />
            <h5 className="emg-t">GALLERY SLIDESHOW</h5>
          </div>
          <div className="col-4">
            <img src={Imagesix} className="emg" alt="" />
            <h5 className="emg-t">PIZZA & FAST FOOD</h5>
          </div>
        </div>

        <div className="row">
          <div class="col-4">
            <img src={Imagesevanth} class="emg" alt="imageone" />
            <h5 className="emg-t">RESERVATION HOME</h5>
          </div>
          <div class="col-4">
            <img src={Imageeight} class="emg" alt="" />
            <h5 className="emg-t">BLOG BOXED</h5>
          </div>
          <div class="col-4">
            <img src={Imagenine} class="emg" alt="" />
            <h5 className="emg-t">BLOG FULLWIDTH</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <img src={Imageelevan} class="emg" alt="imageone" />
            <h5 className="emg-t">WINE</h5>
          </div>
          <div class="col-4">
            <img src={Imagetwelva} class="emg" alt="" />
            <h5 className="emg-t">FRESH CHIKEN</h5>
          </div>
          <div class="col-4">
            <img src={Imagethirteen} class="emg" alt="" />
            <h5 className="emg-t">FRESH & CHILI FISH</h5>
          </div>
        </div>
    </div>
   <Footer/>
   </>
  )
}

export default Facility
