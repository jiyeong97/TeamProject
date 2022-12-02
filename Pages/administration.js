import React, { useState } from 'react';
import Axios from 'axios';
import '../css/App.css';

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
//For visible div elements
    const [visible,setVisible] =  useState(false);

    const [visibleCourseProgram, setVisibleCourseProgram] = useState(false);
    const [visibleCourseTerm, setVisibleCourseTerm] = useState(false);
    const [visibleCourseName, setVisibleCourseName] = useState(false);

    const [visibleDiploma, setVisibleDiploma] = useState(true);
    const [visiblePost,setVisiblePost] = useState(false);
    const [visibleCerti,setVisibleCerti] = useState(false);
    const [visibleUpgrade,setVisibleUpgrade] = useState(false);

    const buttonShowDiploma = e =>{
        if(visibleDiploma==false){
            setVisibleDiploma(true);
            setVisiblePost(false);
            setVisibleCerti(false);
            setVisibleUpgrade(false);
        }
    }

    const buttonShowPost = e =>{
        if(visiblePost==false){
            setVisibleDiploma(false);
            setVisiblePost(true);
            setVisibleCerti(false);
            setVisibleUpgrade(false);
        }
    }

    const buttonShowCerti = e =>{
        if(visibleCerti==false){
            setVisibleDiploma(false);
            setVisiblePost(false);
            setVisibleCerti(true);
            setVisibleUpgrade(false);
        }
    }

    const buttonShowUpgrade = e =>{
        if(visibleUpgrade==false){
            setVisibleDiploma(false);
            setVisiblePost(false);
            setVisibleCerti(false);
            setVisibleUpgrade(true);
        }
    }

    //Organize course by Program and Term
    const [Program, setProgram] = useState("");
    const [name, setName] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");
    const [deliverymode, setDeliveryMode] = useState("");
    const [seatsavailable, setSeatAvailabe] = useState("");
    const [tuition, setTuition] = useState("");
    const [term, setTerm] = useState("");
    const [schedule1, setSchedule1] = useState("");
    const [schedule2, setSchedule2] = useState("");
    const [coursebyName,setCourseByName] = useState([]);
    const [coursebyProgram, setCourseByProgram] = useState([]);
    const [filteredCourse, setFilteredCourse] = useState([]);

    const showByName = ()=>{
        Axios.get('http://localhost:5000/showCourseByName/'+name)
            .then((response)=>{
                setCourseByName(response.data)
                setProgram(response.data.Program)
                setName(response.data.name)
                setStartDate(response.data.startdate)
                setEndDate(response.data.enddate)
                setDeliveryMode(response.data.deliverymode)
                setSeatAvailabe(response.data.deliverymode)
                setTuition(response.data.tuition)
                setTerm(response.data.term)
                setSchedule1(response.data.schedule1)
                setSchedule2(response.data.schedule2);
            }).catch((error)=>{
                console.warn('There is error : ' + error);
            })
        
            Axios.get('http://localhost:5000/showCourseByProgram/'+Program)
            .then((response)=>{
                setCourseByProgram(response.data)
                setProgram(response.data.Program)
                setName(response.data.name)
                setStartDate(response.data.startdate)
                setEndDate(response.data.enddate)
                setDeliveryMode(response.data.deliverymode)
                setSeatAvailabe(response.data.deliverymode)
                setTuition(response.data.tuition)
                setTerm(response.data.term)
                setSchedule1(response.data.schedule1)
                setSchedule2(response.data.schedule2);
            }).catch((error)=>{
                console.warn('There is error : ' + error);
            })

            if(visibleCourseProgram == false){
                setVisibleCourseName(true);
                setVisibleCourseProgram(true);
                setVisibleCourseTerm(false);
            }
            

    }

    const filteringTerm1 = () =>{
        setFilteredCourse(coursebyProgram.filter((item) => item.term=="Term1"))
        if(visibleCourseTerm==false){
            setVisibleCourseName(false);
            setVisibleCourseProgram(false);
            setVisibleCourseTerm(true);
        }
    }

    const filteringTerm2 = () =>{
        setFilteredCourse(coursebyProgram.filter((item) => item.term=="Term2"))
        if(visibleCourseTerm==false){
            setVisibleCourseName(false);
            setVisibleCourseProgram(false);
            setVisibleCourseTerm(true);
        }
    }

    const filteringTerm3 = () =>{
        setFilteredCourse(coursebyProgram.filter((item) => item.term=="Term3"))
        if(visibleCourseTerm==false){
            setVisibleCourseName(false);
            setVisibleCourseProgram(false);
            setVisibleCourseTerm(true);
        }
    }

    const filteringTerm4 = () =>{
        setFilteredCourse(coursebyProgram.filter((item) => item.term=="Term4"))
        if(visibleCourseTerm==false){
            setVisibleCourseName(false);
            setVisibleCourseProgram(false);
            setVisibleCourseTerm(true);
        }
    }


    const Diploma = () => {
        return(
            <div className='programCheck'>
                <form>
                    <input type="radio" id="SotwareDevelopment" className='checkLabel' name="diploma" value="Software Development" onChange = {(e)=>{setProgram(e.target.value)}} />
                    <label>Software Development</label>
                    <input type="radio" id="InformationTechnologySystem" className='checkLabel' name="diploma" value="Information Technology System" onChange = {(e)=>{setProgram(e.target.value)}}/>
                    <label>Information Technology System</label>
                    <input type="radio" id="InteriorDecorating" className='checkLabel' name="diploma" value="Interior Decorating" onChange = {(e)=>{setProgram(e.target.value)}}/>
                    <label>Interior Decorating</label>
                    <input type="radio" id="DigitalDesign" className='checkLabel' name="diploma" value="Digital Design"onChange = {(e)=>{setProgram(e.target.value)}}/>
                    <label>Digital Design</label>
                </form>       
            </div>
        );
    }

    const Postdiploma = () => {
        return(
            <div className='programCheck'>
                <form>
                    <input type="radio" id="DataManagement" className='checkLabel' name="postDiploma" value="Data Management and Analytics"  />
                    <label>Data Management and Analytics</label>
                    <input type="radio" id="Cybersecurity" className='checkLabel' name="postDiploma" value="Cybersecurity"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Cybersecurity</label>
                    <input type="radio" id="Cloud Computing" className='checkLabel' name="postDiploma" value="Cloud Computing"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Cloud Computing</label>
                    <input type="radio" id="Digital Marketing" className='checkLabel' name="postDiploma" value="Digital Marketing"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Digital Marketing</label>
                </form>       
            </div>
        );
    }

    const Certificate = () => {
        return(
            <div className='programCheck'>
                <form>
                    <input type="radio" id="SoftwareDevelopment" className='checkLabel' name="certificate" value="Software Development(Certificate)"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Software Development</label>
                    <input type="radio" id="KitchenandBathDesign" className='checkLabel' name="certificate" value="Kitchen and Bath Design"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Kitchen and Bath Design</label>
                </form>       
            </div>
        );
    }

    const Upgrade = () => {
        return(
            <div className='programCheck'>
                <form>
                    <input type="radio" id="Math" className='checkLabel' name="upgrade" value="Highschool Math"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Highschool Math</label>
                    <input type="radio" id="English" className='checkLabel' name="upgrade" value="Highschool English"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Highschool English</label>
                    <input type="radio" id="Physics" className='checkLabel' name="upgrade" value="Highschool Physics"  onChange={(e)=> {setProgram(e.target.value)}}/>
                    <label>Highschool Physics</label>
                </form>       
            </div>
        );
    }

    const CourseInfo=() => {
        const [courseForm,setcourseForm] = useState([
            {courseName:"SODV1101 - Programming Fundamentals", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Thuesday : 9:30AM ~ 11:00AM", courseSchedule2:"Thursday : 9:30AM ~ 11:00AM"},
            {courseName:"TECH1101 - Web and Internet Fundamentals", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Monday : 12:30PM ~ 02:00PM", courseSchedule2:"Wednesday : 12:30PM ~ 02:00PM"},
            {courseName:"SODV1101 - Internet of Things", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Monday : 9:30AM ~ 11:00AM", courseSchedule2:"Wednesday : 9:30AM ~ 11:00AM"}
        ])
    
        const [newcourseForm,setnewcourseForm]=useState({courseMajor:'',courseProgram:'',courseName:'', courseStartdate:'', courseEnddate:'', courseMode:'', courseSeat:'', courseTuition:'', courseSchedule1:'', courseSchedule2:'',courseTerm:''})
    
        const handleClick = () =>{
            setcourseForm([...courseForm,newcourseForm])
            console.log(courseForm);
            alert("Course is added.");
        }
    
        return(
            <div className='courseAddDiv1'>
                <div className='courseDetailName'>Major : <input type="text" name="coursemajor" value={newcourseForm.courseMajor} onChange={e=>setnewcourseForm({...newcourseForm, courseName:e.target.value})} className="inputCourse" /></div>
                <div className='courseDetailName'>Program : <input type="text" name="courseprogram" value={newcourseForm.courseProgram} onChange={e=>setnewcourseForm({...newcourseForm, courseName:e.target.value})} className="inputCourse" /></div>
                <div className='courseDetailName'>Course Name : <input type="text" name="coursename" value={newcourseForm.courseName} onChange={e=>setnewcourseForm({...newcourseForm, courseName:e.target.value})} className="inputCourse" /></div>
                    <div className='courseDetailDiv3'>
                        <div className='courseAddInputDiv'>
                            <div>Start Date : <input type="text" name="startdate" value={newcourseForm.courseStartdate} onChange={e=>setnewcourseForm({...newcourseForm, courseStartdate:e.target.value})} className="inputCourse" /></div>
                            <div>End Date : <input type="text" name="enddate" value={newcourseForm.courseEnddate} onChange={e=>setnewcourseForm({...newcourseForm, courseEnddate:e.target.value})} className="inputCourse" /></div>
                            <div>Delivery Mode : <input type="text" name="mode" value={newcourseForm.courseMode} onChange={e=>setnewcourseForm({...newcourseForm, courseMode:e.target.value})} className="inputCourse" /></div>
                            <div>Seats Available : <input type="text" name="seats" value={newcourseForm.courseSeat} onChange={e=>setnewcourseForm({...newcourseForm, courseSeat:e.target.value})} className="inputCourse" /></div>
                            <div>Tuition : <input type="text" name="tuition" value={newcourseForm.courseTuition} onChange={e=>setnewcourseForm({...newcourseForm, courseTuition:e.target.value})} className="inputCourse" /></div>
                        </div>
                        <div className='courseDetails'>
                            <div>Course Schedule</div>
                            <div>Schedule1 : <input type="text" name="schedule1" value={newcourseForm.courseSchedule1} onChange={e=>setnewcourseForm({...newcourseForm, courseSchedule1:e.target.value})} className="inputCourse" /></div>
                            <div>Schedule2 : <input type="text" name="schedule2" value={newcourseForm.courseSchedule2} onChange={e=>setnewcourseForm({...newcourseForm, courseSchedule2:e.target.value})} className="inputCourse" /></div>
                            <div>Term : <input type="text" name="term" value={newcourseForm.courseTerm} onChange={e=>setnewcourseForm({...newcourseForm, courseSchedule2:e.target.value})} className="inputCourse" /></div>
                            <button type="button" id="add" className='registerbtn' onClick={handleClick} >Add</button>
                        </div>
            </div>
         </div>
        );
    }
    


    return (
        <div>
            <div className='title1'>
                <h1>BVC Course Registration</h1>
            </div>
            <div className='menu'>
                <button type="button" className='majormenu' onClick={buttonShowDiploma} name='Diploma' key={Diploma}>Diploma</button>
                <button type="button"  className='majormenu'onClick={buttonShowPost} name='Postdiploma' key={Diploma}>Post Diploma</button>
                <button type="button"  className='majormenu'onClick={buttonShowCerti} name='Certificate' key={Diploma}>Certificate</button>
                <button type="button"  className='majormenu'onClick={buttonShowUpgrade} name='Upgrade' key={Diploma}>Upgrade</button>
                <Link to="/contactAdmin" className='mycoursemenu'>Contact</Link>
            </div>
            <div className='programDiv'>
                <div className='program'>Programs</div>
                <div>
                    {visibleDiploma ? <Diploma/> : null}
                    {visiblePost ? <Postdiploma/> : null}
                    {visibleCerti ? <Certificate/> : null}
                    {visibleUpgrade? <Upgrade/> : null}
                </div>
            </div>
            <div className='SearchDiv'>
                <p className='courseName'>Course Name : <input type="text" name="name" className="inputCourse" onChange={(e)=> {setName(e.target.value)}}/></p>
                <button type="button" id="searchbtn" onClick={showByName}>Search</button>
                <button type="button" className='addbtn' onClick = {()=>{
                    setVisible(!visible);
                }}>{visible ? "Exit" : "Add"}</button>
                
            </div>
            <div className='AddInfoDiv'>
                {visible && <CourseInfo/>}
            </div>
            <div className='courselistDiv'>
                <div className='termDiv'>
                    <button type="button" id="term1" className='termbtn' onClick={filteringTerm1} >Term1</button>
                    <button type="button" id="term2" className='termbtn' onClick={filteringTerm2}>Term2</button>
                    <button type="button" id="term3" className='termbtn' onClick={filteringTerm3}>Term3</button>
                    <button type="button" id="term4" className='termbtn' onClick={filteringTerm4}>Term4</button>
                </div>
                {visibleCourseName && <div className='courseDetailDiv1'>
                    {coursebyName.map(course=>(
                        <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>{course.name}</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : {course.startdate}</div>
                                <div>End Date : {course.enddate}</div>
                                <div>Delivery Mode : {course.deliverymode}</div>
                                <div>Seats Available : {course.seatsavailable}</div>
                                <div>Tuition : {course.tuition}</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>{course.schedule1}</div>
                                <div>{course.schedule2}</div>
                                <button type="button" id="delete" className='deletebtn' onClick={deleteCourse}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>}
                {visibleCourseProgram && <div className='courseDetailDiv1'>
                    {coursebyProgram.map(course=>(
                        <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>{course.name}</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : {course.startdate}</div>
                                <div>End Date : {course.enddate}</div>
                                <div>Delivery Mode : {course.deliverymode}</div>
                                <div>Seats Available : {course.seatsavailable}</div>
                                <div>Tuition : {course.tuition}</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>{course.schedule1}</div>
                                <div>{course.schedule2}</div>
                                <button type="button" id="delete" className='deletebtn' onClick={deleteCourse}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>}
                {visibleCourseTerm && <div className='courseDetailDiv1'>
                    {filteredCourse.map(course=>(
                        <div className='courseDetailDiv2'>
                        <div className='courseDetailName'>{course.name}</div>
                        <div className='courseDetailDiv3'>
                            <div>
                                <div>Start Date : {course.startdate}</div>
                                <div>End Date : {course.enddate}</div>
                                <div>Delivery Mode : {course.deliverymode}</div>
                                <div>Seats Available : {course.seatsavailable}</div>
                                <div>Tuition : {course.tuition}</div>
                            </div>
                            <div className='courseDetails'>
                                <div>Course Schedule</div>
                                <div>{course.schedule1}</div>
                                <div>{course.schedule2}</div>
                                <button type="button" id="delete" className='deletebtn' onClick={deleteCourse}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export default Admin;
