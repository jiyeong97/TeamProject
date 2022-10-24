import React from 'react';
import '../css/App.css';

const Upgrade = () => {
    return(
        <div className='programCheck'>
            <form>
                <input type="checkbox" id="Math" className='checkLabel'/>
                <label>Highshcool Math</label>
                <input type="checkbox" id="English" className='checkLabel'/>
                <label>Highshcool English</label>
                <input type="checkbox" id="Physics" className='checkLabel'/>
                <label>Highshcool Physics</label>
            </form>       
        </div>
    );
}

export default Upgrade;