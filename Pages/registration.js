import React, { useState } from 'react';
import '../css/App.css';
import Diploma from '../Components/dimploma';
import Postdiploma from '../Components/postdiploma';
import Certificate from '../Components/certification';
import Upgrade from '../Components/upgrade';
import Term1 from '../Components/term1';
import Term2 from '../Components/term2';
import Term3 from '../Components/term3';
import Term4 from '../Components/term4';

import { Link } from "react-router-dom";


const Registration = () => {
    const [content, setContent] = useState();

    const buttonValueSetting = e => {
        const{name} = e.target;
        setContent(name);
    }

    const termValueSetting = e => {
        const{name} = e.target;
        setContent(name);
    }

    const selectComponent  = {
        Diploma : <Diploma/>,
        Postdiploma : <Postdiploma/>,
        Certificate : <Certificate/>,
        Upgrade : <Upgrade/>
        
    };
    const selectComponent1 = {
        Term1 : <Term1/>,
        Term2 : <Term2/>,
        Term3 : <Term3/>,
        Term4 : <Term4/>
    }

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
                <Link to="/mycourse" className='mycoursemenu'>My Course</Link>
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
            </div>
            <div className='courselistDiv'>
                <div className='termDiv'>
                    <button type="button" id="term1" className='termbtn' onClick={termValueSetting} name='Term1' key={Term1}>Term1</button>
                    <button type="button" id="term2" className='termbtn' onClick={termValueSetting} name='Term2' key={Term2}>Term2</button>
                    <button type="button" id="term3" className='termbtn' onClick={termValueSetting} name='Term3' key={Term3}>Term3</button>
                    <button type="button" id="term4" className='termbtn' onClick={termValueSetting} name='Term4' key={Term4}>Term4</button>
                </div>
               <div className='courseDetailDiv1'>
                    {content&& <div className='courseDetailDiv1'>{selectComponent1[content]}</div>}
            </div>
            </div>
        </div>
    );
}

export default Registration;