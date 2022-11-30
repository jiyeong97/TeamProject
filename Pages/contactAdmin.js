import React from 'react';
import '../css/App.css';

import {Link} from "react-router-dom";

const contactAdmin = () =>{
    return(
        <div>
            <div className='title1'>
                <h1>BVC Course Registration</h1>
            </div>
            <div className='menu'>
                <Link to="/admin" className='mycoursemenu'>Home</Link>
            </div>
            <div className='programDiv2'>
                <div className='program'>Contact form from Students</div>
            </div>
            <div className='courselistDiv'>
            </div>
        </div>
    );
}

export default contactAdmin;