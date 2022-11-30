import React, { Component } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';

import LogIn from './Pages/log-in';
import Registration from './Pages/registration';
import MyCourse from './Pages/mycourse';
import Admin from './Pages/administration';
import ContactAdmin from './Pages/contactAdmin';

class App extends Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<LogIn/>} exact/>
                        <Route path="/registration" element={<Registration />}/>
                        <Route path="/mycourse" element={<MyCourse />}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/contactAdmin" element={<ContactAdmin/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default App;