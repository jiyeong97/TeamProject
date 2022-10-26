import React from 'react';
import '../css/App.css';

const Term4 = () => {
    return(
        <div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>SODV2401 - Algorithms and Data Structures</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2024</div>
                                <div>End Date : April 28, 2024</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 38</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Tuesday : 12:30PM ~ 2:00PM</div>
                                <div>Thursday : 12:30PM ~ 2:00PM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>SODV2999 - Mobile Application Development</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2024</div>
                                <div>End Date : April 28, 2024</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Monday : 9:30AM ~ 11:00AM</div>
                                <div>Wednesday : 9:30AM ~ 11:00AM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>TECH2102 - Enterprise Computing</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : January 10,2024</div>
                                <div>End Date : April 28, 2024</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Tuesday : 2:00PM ~ 3:30PM</div>
                                <div>Thursday : 2:00PM ~ 3:30PM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            
    );
}

export default Term4;