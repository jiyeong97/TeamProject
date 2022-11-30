import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import CreateUser from './pages/CreateUser.js';
import Home from './pages/Home'; 
import './App.css';
import SearchUser from './pages/SearchUser.js';
import UserForm from './pages/UserForm.js';
import NavBar from './components/navBar.js';
import Header from './components/Header.js';
import LogIn from './pages/Login.js';
import Registration from './pages/Registration.js';
import ListUsers from './pages/ListUsers';

 const App = () => {
  return (
    <div>     
        {/* Call component NavBar */}
        <NavBar />
        {/* Call component Header */}
          <Header />        
              <div>  
                {/* Frontend Routes */}
              <BrowserRouter>
                <Routes>
                  <Route path="/" exact element={  <Home />} />
                  <Route path="/login" element={  <LogIn />} />
                  <Route path="/registration" element={ <Registration />} />
                  <Route path="/listusers" element={ <ListUsers /> } />
                  <Route path="/createuser" element={ <CreateUser />} />  
                  <Route path="/search" element={ <SearchUser />} />  
                  <Route path="/createnewuser" element={ <UserForm />} />  
                </Routes>              
                  {/* <Route path="/post/:postId" render={(props)=> <Post />}/> */}
               </BrowserRouter>
              </div>                    
    </div>
  )}
export default App;
