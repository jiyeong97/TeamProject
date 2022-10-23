import React from 'react';
import '../css/App.css';

import { Link } from "react-router-dom";

const mycourse = () => {
    return(
        <div>
            <div className='title'>
                <h1>BVC Course Registration</h1>
            </div>
            <div className='menu'>
                <Link to="/registration" className='mycoursemenu'>Home</Link>
                <button type="button" className='majormenu'>Diploma</button>
                <button type="button"  className='majormenu'>Post Diploma</button>
                <button type="button"  className='majormenu'>Certificate</button>
                <button type="button"  className='majormenu'>Upgrade</button>
            </div>
            <div className='programDiv2'>
                <div className='program'>Software Development</div>
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
                                <button type="button" id="delete" className='deletebtn'>Delete</button>
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
                                <button type="button" id="delete" className='deletebtn'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default mycourse;