
//Traer la informacion desde el backend y mostrarla
import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'
import Footer from '../components/Footer';


    function ListUsers() {
    const responseData = [];
    const [name, setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [email, setEmail] = useState("email");
    const [telephone,setTelephone] = useState("");
    const [department,setDepartment] = useState("");
    const [program,setProgram] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const [userdata,setUserData]=useState([]);
    

        Axios.get(`http://localhost:5000/listall/`)
            .then((response)=>{
                setUserData(response.data)
                setName(response.data.name);
                setLastname(response.data.lastname);
                setEmail(response.data.email);
                setTelephone(response.data.telephone);
                setDepartment(response.data.department);
                setProgram(response.data.program);
                setUsername(response.data.username);
                setPassword(response.data.password);              
                console.log(response.data);
                console.log("get the response and display it on this page")
            }).catch((error) => {
                console.warn('There is error :(' + error);
            })
       
        return (
     
    <div> 
            <div className="divAlign">
                <div>
                    <h3 className='title-form'>List of Students Registered</h3>
                    <table className="table-list-users" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Department</th>
                            <th>Program</th>
                            <th>User Name</th>
                            <th>password</th>                          
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map(person => (
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.lastname}</td>
                                <td>{person.email}</td>
                                <td>{person.telephone}</td>
                                <td>{person.department}</td>
                                <td>{person.program}</td>
                                <td>{person.username}</td>
                                <td>{person.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
                <div className='div-Container-pages-forms'> <label>Delete By Full Name: </label>
                    <input name="fname" type="text" /*onChange={(e)=> {setFname(e.target.value)}} */ /> <br />                  
                    <button className='button-delete-user'/* onClick={submitPost} */>Delete User</button>                    
                </div>

                <div className='div-Container-pages-forms'> <label>Edit By Full Name: </label>
                    <input name="fname" type="text" /*onChange={(e)=> {setFname(e.target.value)}} */ /> <br />                  
                    <button className='button-delete-user'/* onClick={submitPost} */>Edit User</button>                    
                </div>
              
            </div>

            <div>
                     <Footer />
            </div>                      


</div>        
    )
}
export default ListUsers;

