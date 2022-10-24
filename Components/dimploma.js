import React from 'react';
import '../css/App.css';

const Diploma = () => {
    return(
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
    );
}

export default Diploma;