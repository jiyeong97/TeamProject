import React, { Component } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';

import logIn from './Pages/log-in';
import registration from './Pages/registration';

class App extends Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route index elemet={<logIn/>} exact/>
                <Route path="/registration" element={<registration/>}/>
            </Routes>
            </BrowserRouter>
            </>
        );
    }
}

export default App;