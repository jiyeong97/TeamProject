import React, { useState } from 'react';
import '../css/App.css';
import Diploma from '../Components/dimploma';
import Postdiploma from '../Components/postdiploma';
import Certificate from '../Components/certification';
import Upgrade from '../Components/upgrade';

import { Link } from "react-router-dom";


const Registration = () => {
    const [content, setContent] = useState();

    const buttonValueSetting = e => {
        const{name} = e.target;
        setContent(name);
    }

    const selectComponent  = {
        Diploma : <Diploma/>,
        Postdiploma : <Postdiploma/>,
        Certificate : <Certificate/>,
        Upgrade : <Upgrade/>
    };

    return (
        <div>
            <div className='title'>
                <h1>BVC Course Registration</h1>
            </div>
            <div className='menu'>
                <button type="button" className='majormenu' onClick={buttonValueSetting} name='Diploma' key={Diploma}>Diploma</button>
                <button type="button"  className='majormenu'onClick={buttonValueSetting} name='Postdiploma' key={Diploma}>Post Diploma</button>
                <button type="button"  className='majormenu'onClick={buttonValueSetting} name='Certificate' key={Diploma}>Certificate</button>
                <button type="button"  className='majormenu'onClick={buttonValueSetting} name='Upgrade' key={Diploma}>Upgrade</button>
                <Link to="/mycourse" className='mycoursemenu'>My Course</Link>
            </div>
            <div className='programDiv'>
                <div className='program'>Programs</div>
                <div>
                    {content && <div>{selectComponent[content]}</div>}
                </div>
            </div>
            <div className='SearchDiv'>
                <p className='courseName'>Course Name : </p>
                {/* <input type="text" id="search" name="search">Enter the course name</input> */}
                <button type="button" id="searchbtn">Search</button>
            </div>
            <div className='courselistDiv'>
                <div className='termDiv'>
                    <button type="button" id="term1" className='termbtn'>Term1</button>
                    <button type="button" id="term2" className='termbtn'>Term2</button>
                    <button type="button" id="term3" className='termbtn'>Term3</button>
                    <button type="button" id="term4" className='termbtn'>Term4</button>
                </div>
                <div className='courseDetailDiv1'>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>SODV1101 - Programming Fundamentals</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2023</div>
                                <div>End Date : April 28, 2023</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Tuesday : 9:30AM ~ 11:00AM</div>
                                <div>Thursday : 9:30AM ~ 11:00AM</div>
                                <button type="button" id="register" className='registerbtn'>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>TECH1101 - Web and Internet Fundamentals</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2023</div>
                                <div>End Date : April 28, 2023</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Monday : 12:30PM ~ 02:00PM</div>
                                <div>Wednesday : 12:30PM ~ 02:00PM</div>
                                <button type="button" id="register" className='registerbtn'>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>TECH1102 - Internet of Things</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2023</div>
                                <div>End Date : April 28, 2023</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Monday : 9:30AM ~ 11:00AM</div>
                                <div>Wednesday : 9:30AM ~ 11:00AM</div>
                                <button type="button" id="register" className='registerbtn'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;