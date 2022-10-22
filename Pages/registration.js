import React from 'react';

const registration = () => {
    return (
        <div>
            <div className='title'>
                <h1>BVC Course Registration</h1>
            </div>
            <div className='menu'>
                {/* <Link className='diplomaMenu'>Diploma</Link>
                <Link className='postDiplomalMenu'>Post Diploma</Link>
                <Link className='certificateMenu'>Certificate</Link>
                <Link className='upgradeMenu'>Upgrade</Link>
                <Link className='myCourseMenu'>My Course</Link> */}
            </div>
            <div className='programDiv'>
                <div>Programs</div>
                <div className='programCheck'>
                    <form>
                        <input type="checkbox" id="SotwareDevelopment"/>
                        <label for="SotwareDevelopment">Software Development</label>
                        <input type="checkbox" id="InformationTechnologySystem"/>
                        <label for="InformationTechnologySystem">Information Technology System</label>
                        <input type="checkbox" id="InteriorDecorating"/>
                        <label for="InteriorDecorating">Interior Decorating</label>
                        <input type="checkbox" id="DigitalDesign"/>
                        <label for="DigitalDesign">Digital Design</label>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default registration;