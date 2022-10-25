import React, {useState} from 'react'
import '../css/App.css';

const CourseInfo=() => {
    const [coursename , setCourseName] = useState("");
    const [coursestartdate , setCourseStartDate] = useState("");
    const [courseenddate , setCourseEndDate] = useState("");
    const [coursemode , setCourseMode] = useState("");
    const [courseseat , setCourseSeat] = useState("");
    const [coursetuition , setCourseTuition] = useState("");
    const [courseschedule1 , setCourseSchedule1] = useState("");
    const [courseschedule2 , setCourseSchedule2] = useState("");

    const onChangeCourseName = (e) =>{
        setCourseName(e.target.value);
    }

    const onChangeStartDate = (e) =>{
        setCourseStartDate(e.target.value);
    }

    const onChangeEndDate = (e) =>{
        setCourseEndDate(e.target.value);
    }

    const onChangeCourseMode = (e) =>{
        setCourseMode(e.target.value);
    }

    const onChangeCourseSeat = (e) =>{
        setCourseSeat(e.target.value);
    }

    const onChangeCourseTuition = (e) =>{
        setCourseTuition(e.target.value);
    }

    const onChangeCourseSchedule1 = (e) =>{
        setCourseSchedule1(e.target.value);
    }

    const onChangeCourseSchedule2 = (e) =>{
        setCourseSchedule2(e.target.value);
    }

    return(
        <div className='courseAddDiv1'>
            <div className='courseDetailName'>Course Name : <input type="text" name="coursename" value={coursename} onChange={onChangeCourseName} className="inputCourse" /></div>
                <div className='courseDetailDiv3'>
                    <div className='courseAddInputDiv'>
                        <div>Start Date : <input type="text" name="name" value={coursestartdate} onChange={onChangeStartDate} className="inputCourse" /></div>
                        <div>End Date : <input type="text" name="name" value={courseenddate} onChange={onChangeEndDate} className="inputCourse" /></div>
                        <div>Delivery Mode : <input type="text" name="name" value={coursemode} onChange={onChangeCourseMode} className="inputCourse" /></div>
                        <div>Seats Available : <input type="text" name="name" value={courseseat} onChange={onChangeCourseSeat} className="inputCourse" /></div>
                        <div>Tuition : <input type="text" name="name" value={coursetuition} onChange={onChangeCourseTuition} className="inputCourse" /></div>
                    </div>
                    <div className='courseDetails'>
                        <div>Course Schedule</div>
                        <div>Schedule1 : <input type="text" name="name" value={courseschedule1} onChange={onChangeCourseSchedule1} className="inputCourse" /></div>
                        <div>Schedule2 : <input type="text" name="name" value={courseschedule2} onChange={onChangeCourseSchedule2} className="inputCourse" /></div>
                        <button type="button" id="register" className='registerbtn'>Register</button>
                    </div>
        </div>
     </div>
    );
}

export default CourseInfo;