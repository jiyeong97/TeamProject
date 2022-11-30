
//Traer la informacion desde el backend y mostrarla
import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'
import Footer from '../components/Footer';


    function ListUsers() {
    const responseData = [];
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("email");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [userdata,setUserData]=useState([]);
    

        Axios.get(`http://localhost:5000/listall/`)
            .then((response)=>{
                setUserData(response.data)
                setFname(response.data.name);
                setEmail(response.data.email)
                console.log(response.data);
                console.log("get the response and display it on this page")
            }).catch((error) => {
                console.warn('There is error :(' + error);
            })
                  
            // function deletePost(fname) {
            //     Axios.post(`http://localhost:5000/delete/`+fname)       
            //         .then((response)=>{                       
            //             console.log("user deleted!")        
            //         }).catch((error) => {        
            //             console.warn('There is error :(' + error);        
            //      })        
            //     }


            //     function addRowHandlers() {
            //         var table = document.getElementById("tableId");
            //         var rows = table.getElementsByTagName("tr");
            //         for (var i = 0; i < rows.length; i++) {
            //             var currentRow = table.rows[i];
            //             var createClickHandler = 
            //                 function(row) 
            //                 {
            //                     return function() { 
            //                         var cell = row.getElementsByTagName("td")[0];
            //                         var id = cell.innerHTML;
            //                         alert("id:" + id);
            //                     };
            //                 };
                
            //             currentRow.onclick = deletePost(currentRow);
            //         }
            //     }
            //     window.onload = addRowHandlers();

        return (    
    <div> 
            <div className="divAlign">
                <div>
                    <h3 className='title-form'>List of Students Registered</h3>
                    <table className="table-list-users"  id="table-id">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map(person => (
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>{person.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
                <div className='div-Container-pages-forms'> <label>Delete By Full Name: </label>
                    <input name="fname" type="text" /*onChange={(e)=> {setFname(e.target.value)}} */ /> <br />                  
                    <button className='button-delete-user' /*onClick={deletePost(fname)}*/ >Delete User</button>                    
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

