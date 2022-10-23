import React from 'react';
import '../css/App.css'

const registration = () => {
    return (
        <div>
            <div className='title'>
                <h1>BVC Course Registration</h1>
            </div>
            <div className='menu'>
                <div className='majormenu'>Diploma</div>
                <div className='majormenu'>Post Diploma</div>
                <div className='majormenu'>Certificate</div>
                <div className='majormenu'>Upgrade</div>
                <div className='majormenu'>My Course</div>
            </div>
            <div className='programDiv'>
                <div className='program'>Programs</div>
                <div className='programCheck'>
                    <form>
                        <input type="checkbox" id="SotwareDevelopment" className='checkLabel'/>
                        <label>Software Development</label>
                        <input type="checkbox" id="InformationTechnologySystem" className='checkLabel'/>
                        <label>Information Technology System</label>
                        <input type="checkbox" id="InteriorDecorating" className='checkLabel'/>
                        <label>Interior Decorating</label>
                        <input type="checkbox" id="DigitalDesign" className='checkLabel'/>
                        <label>Digital Design</label>
                    </form>
                    
                </div>
            </div>
            <div className='SearchDiv'>
                <p className='courseName'>Course Name : </p>
                {/* <input type="text" id="search" name="search">Enter the course name</input> */}
                <button type="button" id="searchbtn">Search</button>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default registration;