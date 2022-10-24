import React from 'react';
import '../css/App.css';

const Certificate = () => {
    return(
        <div className='programCheck'>
            <form>
                <input type="checkbox" id="SoftwareDevelopment" className='checkLabel'/>
                <label>Software Development</label>
                <input type="checkbox" id="KitchenandBathDesign" className='checkLabel'/>
                <label>Kitchen and Bath Design</label>
            </form>       
        </div>
    );
}

export default Certificate;