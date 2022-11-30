//import React from 'react';
import '../App.css';
//import logo from '../images/Logo.svg'
import React, { useState } from 'react';
import Footer from '../components/Footer';

export const LogIn = () => { 

    const conseguirDatosFormulario = e => { 
        e.preventDefault();
        let data = e.target;
        let usuario = {
            Id: data.id.value,
            password: data.password.value,
            selectId: data.selectId.value
        };
        console.log(usuario);

        let studentId = {
            IdStudent: "430843",
            passwordStudent: "123456"
        }
             console.log(studentId);

        let administratorId = {
            nameAdmin: "100001",
            passwordAdmin: "789789"
        }
             console.log(administratorId);

        if(data.selectId.value === "student"){
            if( (data.id.value === studentId.IdStudent) && (data.password.value === studentId.passwordStudent) )
            {
                //Redirect page to registration page
                alert("Welcome  " +  data.id.value + "  to Courses Page");
                window.location.replace('/registration');
               
            }
            else{
                //redirect to login page
                alert("The user and password are invalid, alert student");
                window.location.replace('/login');
            }
        }

        else if(data.selectId.value === "administrator"){
            if( (data.id.value === administratorId.nameAdmin)  && ( data.password.value === administratorId.passwordAdmin))
            {
                //Redirect to Administration page.
                alert("Welcome " +  data.id.value + "  to Administrator page");
                window.location.replace('/admin');
            }
            else{
                //redirect to login page
                alert("The user and password are invalid, alert student");
                window.location.replace('/login');
            }
        }

 }

return (         
    <div>
            <div className='div-Container-pages-forms'>   
                <div> 
                    <h3 className='title-form'>Login Page</h3>
                </div>
           
            <form onSubmit={conseguirDatosFormulario}>    
                <label>ID: </label>           
                <input type="text"  name="id" className='input'/> 
                <label>Password: </label>
                <input type="password" name="password" className='input'/> 
                <label>Select: </label>
                <select name='selectId' className='select-user'>
                    <option value="student">Student</option>
                    <option value="administrator" >Administrator</option>
                </select>
    
                <input className='input' type="submit" value="Submit"/>
                   
            </form>
        </div>

    <div>
      <Footer />
    </div> 


 </div>

)

}
 export default LogIn;








