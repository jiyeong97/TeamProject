import React from 'react';
import '../css/App.css';

const Term3 = () => {
    return(
        <div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>SODV2201 - Web Programming</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : September 6,2023</div>
                                <div>End Date : December 19, 2023</div>
                                <div>Delivery Mode : In Class</div>
                                <div>Seats Available : 38</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Monday : 12:30PM ~ 2:00PM</div>
                                <div>Wednesday : 12:30PM ~ 2:00PM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>SODV2101 - Rapid Application Development</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : September 6,2023</div>
                                <div>End Date : December 19, 2023</div>
                                <div>Delivery Mode : Combined-online</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Tuesday : 9:30AM ~ 11:00AM</div>
                                <div>Thursday : 9:30AM ~ 11:00AM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>DATA2201 - Relational Databases</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : September 6,2023</div>
                                <div>End Date : December 19, 2023</div>
                                <div>Delivery Mode : Combined-Online</div>
                                <div>Seats Available : 40</div>
                                <div>Tuition : $1857.00</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>Monday : 8:00AM ~ 11:00AM</div>
                                <button type="button" id="register" className='register' onClick={() => alert('Course has been registered, Congrats!')}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            
    );
}

export default Term3;