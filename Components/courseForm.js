import React, {useState} from 'react'
import '../css/App.css';

const CourseInfo=() => {
    const [courseForm,setcourseForm] = useState([
        {courseName:"SODV1101 - Programming Fundamentals", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Thuesday : 9:30AM ~ 11:00AM", courseSchedule2:"Thursday : 9:30AM ~ 11:00AM"},
        {courseName:"TECH1101 - Web and Internet Fundamentals", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Monday : 12:30PM ~ 02:00PM", courseSchedule2:"Wednesday : 12:30PM ~ 02:00PM"},
        {courseName:"SODV1101 - Internet of Things", courseStartdate:"January 10, 2023", courseEnddate:"April 28, 2023", courseMode:"In Class", courseSeat:"40", courseTuition:"$1857.00", courseSchedule1:"Monday : 9:30AM ~ 11:00AM", courseSchedule2:"Wednesday : 9:30AM ~ 11:00AM"}
    ])

    const [newcourseForm,setnewcourseForm]=useState({courseName:'', courseStartdate:'', courseEnddate:'', courseMode:'', courseSeat:'', courseTuition:'', courseSchedule1:'', courseSchedule2:''})

    const handleClick = () =>{
        setcourseForm([...courseForm,newcourseForm])
        console.log(courseForm);
        alert("Course is added.");
    }

    return(
        <div className='courseAddDiv1'>
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
                        <button type="button" id="add" className='registerbtn' onClick={handleClick} >Add</button>
                    </div>
        </div>
     </div>
    );
}

export default CourseInfo;