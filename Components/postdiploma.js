import React from 'react';
import '../css/App.css';

const Postdiploma = () => {
    return(
        <div className='programCheck'>
            <form>
                <input type="checkbox" id="DataManagement" className='checkLabel'/>
                <label>Data Management and Analytics</label>
                <input type="checkbox" id="Cybersecurity" className='checkLabel'/>
                <label>Cybersecruity</label>
                <input type="checkbox" id="Cloud Computing" className='checkLabel'/>
                <label>Cloud Computing</label>
                <input type="checkbox" id="Digital Marketing" className='checkLabel'/>
                <label>Digital Marketing</label>
            </form>       
        </div>
    );
}

export default Postdiploma;