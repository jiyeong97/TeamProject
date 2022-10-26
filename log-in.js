//import React from 'react';
import '../css/login.css';
import logo from '../images/Logo.svg'
import React, { useState } from 'react';


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
            if( (data.id.value === "430843") && (data.password.value === "123456") )
            {
                //Redirect page to mycouse page
                alert("Bienvenido  " +  data.id.value + "  a la pagina de estudiantes");
                window.location.replace('/mycourse');
               
            }
            else{
                //redirect to login page
                alert("El usuario y password no son validos, alert student");
                window.location.replace('/');
            }
        }

        else if(data.selectId.value === "administrator"){
            if( (data.id.value === "100001")  && ( data.password.value === "789789"))
            {
                //Redirect to Administration page.
                alert("Bienvenido  " +  data.id.value + "  a la pagina de Administrador");
                window.location.replace('/administration');
            }
            else{
                //redirect to login page
                alert("El usuario y password no son validos, alert Administrador");
                window.location.replace('/');
            }
        }

 }

return (         
    <div>

        <header className='header'>
            <img  className='imagen' src={logo} alt="Logo Bow Valley College" />
        </header>


        <h2 className='title'>Welcome to Bow Valley College!</h2>

        <div> <h2 className='title-loginpage'>Login Page</h2></div>
            <div className='container'>   
           
            <form onSubmit={conseguirDatosFormulario}>    
                            
                <input type="text"  name="id" className='input'  placeholder='Student ID or Admin ID'/> 

                <input type="password" name="password" className='input' placeholder='Password'/> 

                <select name='selectId' className='select-user'>
                    <option value="student">Student</option>
                    <option value="administrator" >Administrator</option>
                </select>
    
                <input className='input' type="submit" value="Submit"/>
                   
            </form>
        </div>
    </div>

)

}

 export default LogIn;








