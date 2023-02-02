import React, {useState} from 'react';
import { menuItems } from './menuitem';

const Scrollbtn = () => {


  

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const navigateToTop = () => {
    console.log("navigateToTop()");

    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }

  window.addEventListener('scroll', toggleVisible);


  return (
   
    <div>
     {
      menuItems.map((item)=> 
    <div>{item.name}</div>
    ) }
  
      <button id="myBtn" onClick={() => {navigateToTop()}}  style={{display: visible ? 'inline' : 'none'}} >Top</button>
    </div>
  )
}

export default Scrollbtn
