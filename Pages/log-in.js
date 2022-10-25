import React from 'react';
import '../css/login.css';
import logo from '../images/Logo.svg'

const LogIn = () => {
    return (
          
    <div>

        <header className='header'>
              <img  className='imagen' src={logo} alt="this is car image" />
        </header>
 

        <h2 className='title'>Welcome to Bow Valley College!</h2>
        <div> <h2 className='title-loginpage'>Login Page</h2></div>
            <div className='container'>
           
                 <form>
                
                <input type="text" name="name"  placeholder='Name'/>
               
                <input type="password" name="password" placeholder='Password'/>
             
                <select className='select-user'>
                <option value="grapefruit">Student</option>
                <option value="lime">Administrator</option>
                </select>

                <input type="submit" value="Submit" />
                </form>


    </div>


        </div>

    );
}

export default LogIn;
