import React, { Component } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';

import LogIn from './Pages/log-in';
import Registration from './Pages/registration';

class App extends Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route index elemet={<LogIn/>} exact/>
                        <Route path="/registration" element={<Registration />}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default App;