import React, { useState } from 'react';
import '../css/App.css';

import Diploma from '../Components/dimploma';
import Postdiploma from '../Components/postdiploma';
import Certificate from '../Components/certification';
import Upgrade from '../Components/upgrade';
import CourseInfo from '../Components/courseForm';
import { Link } from "react-router-dom";

const Admin = () => {
    const [courseForm,setcourseForm] = useState([
        {courseName:"SODV1101 - Programming Fundamentals", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Thuesday : 9:30AM ~ 11:00AM", courseSchedule2:"Thursday : 9:30AM ~ 11:00AM"},
        {courseName:"TECH1101 - Web and Internet Fundamentals", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Monday : 12:30PM ~ 02:00PM", courseSchedule2:"Wednesday : 12:30PM ~ 02:00PM"},
        {courseName:"SODV1101 - Internet of Things", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Monday : 9:30AM ~ 11:00AM", courseSchedule2:"Wednesday : 9:30AM ~ 11:00AM"},
        {courseName:"MGMT1103 - Introduction to Project Teams", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Thuesday : 12:30PM ~ 02:00PM", courseSchedule2:"Thursday : 12:30PM ~ 02:00PM"}
    ])

    const deleteCourse = () =>{
        let copy_courseForm=[...courseForm]
        copy_courseForm.splice(0,1)
        setcourseForm(copy_courseForm);
    }

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

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className='title1'>
                <h1>BVC Course Registration</h1>
            </div>
            <div className='menu'>
                <button type="button" className='majormenu' onClick={buttonValueSetting} name='Diploma' key={Diploma}>Diploma</button>
                <button type="button"  className='majormenu'onClick={buttonValueSetting} name='Postdiploma' key={Diploma}>Post Diploma</button>
                <button type="button"  className='majormenu'onClick={buttonValueSetting} name='Certificate' key={Diploma}>Certificate</button>
                <button type="button"  className='majormenu'onClick={buttonValueSetting} name='Upgrade' key={Diploma}>Upgrade</button>
                <Link to="/contactAdmin" className='mycoursemenu'>Contact</Link>
            </div>
            <div className='programDiv'>
                <div className='program'>Programs</div>
                <div>
                    {content && <div>{selectComponent[content]}</div>}
                </div>
            </div>
            <div className='SearchDiv'>
                <p className='courseName'>Course Name : <input type="text" name="name" className="inputCourse" /></p>
                <button type="button" id="searchbtn">Search</button>
                <button type="button" className='addbtn' onClick = {()=>{
                    setVisible(!visible);
                }}>{visible ? "Exit" : "Add"}</button>
                
            </div>
            <div className='AddInfoDiv'>
                {visible && <CourseInfo/>}
            </div>
            <div className='courselistDiv'>
                <div className='termDiv'>
                    <button type="button" id="term1" className='termbtn'>Term1</button>
                    <button type="button" id="term2" className='termbtn'>Term2</button>
                    <button type="button" id="term3" className='termbtn'>Term3</button>
                    <button type="button" id="term4" className='termbtn'>Term4</button>
                </div>
                <div className='courseDetailDiv1'>
                    {courseForm.map((course, index)=>(
                        <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>{course.courseName}</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : {course.courseStartdate}</div>
                                <div>End Date : {course.courseEnddate}</div>
                                <div>Delivery Mode : {course.courseMode}</div>
                                <div>Seats Available : {course.courseSeat}</div>
                                <div>Tuition : {course.courseTuition}</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>{course.courseSchedule1}</div>
                                <div>{course.courseSchedule2}</div>
                                <button type="button" id="delete" className='deletebtn' onClick={deleteCourse}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admin;