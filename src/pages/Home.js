import React from 'react';
import '../App.css';
import PeopleIm from '../images/image3.jpg';
import Footer from '../components/Footer';

export default () => (

<div>  

   <div className='div-home'>
      <h1 className="title-form">Welcome to BVC App!</h1>
      <p>The ease of managing your courses!</p>
      <img src={PeopleIm} />   
   </div>

   <div>
    <Footer />
   </div>
     
        
</div> 
  
);

