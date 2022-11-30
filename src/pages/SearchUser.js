import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'
import Footer from '../components/Footer';


function SearchUser() {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("email");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [userdata,setUserData]=useState([]);

    const submitPost = () => {
        Axios.get(`http://localhost:5000/search/`+fname)
            .then((response)=>{
                    setUserData(response.data)
                    setFname(response.data.name);
                    setEmail(response.data.email)
                    console.log(response.data);
                    console.log("get the respons and display it on this page")
            }).catch((error) => {
                console.warn('There is error :(' + error);
         })
        }

        // Funcion de deltete user
        
        


        // Funcion de editar user

        return (

        <div>    
            <div className="div-Container-pages-forms">
                <div>
                     <h3 className='title-form'>Search User /as administrator/</h3>
                </div>
                <div> <label>Search By Name: </label>
                    <input name="fname" type="text" onChange={(e)=> {setFname(e.target.value)}}/> <br />                  
                    <button onClick={submitPost}>Search!</button>                    
                </div>

                
                <div>
                    
                   <table className="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map(person => (
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
                    
                </div>
            </div>


            <div>
                     <Footer />
            </div>                    

    </div> 


    )
}
export default SearchUser
