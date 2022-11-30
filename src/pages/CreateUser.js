import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import '../App.css';

function CreateUser() {   
    const [users,setUsers] = useState({fname:"", email:"",username: "", password: ""})
    const [msg, setMessage]=useState("")
    const [data, setData]=useState(null)
     const submitPost = () => {       
    //  if(users.fname=="" || users.email==""){
    //     setMessage("enter name and email")
    //  }else{     
        Axios.post('http://localhost:5000/newuser' , users)
        .then((response)=>{
            setMessage("New user created")
            setData(response)
            console.log(response)
            console.log(msg)
            console.log(users)
            }).catch((error) => {
                setMessage("There is error, data not sent")
                console.log(msg)
                console.warn('There is error :(' + error);
        })
    }//}
        return (
            <div className="div-Container-pages-forms">
                <div>
                     <h3 className='title-form'>Create User /as administrator/</h3>
                </div>
                <div> <label>FullName: </label>
                    <input name="fname" type="text" onChange={(e)=> {setUsers(e.target.name = e.target.value)}}/> <br />
                    <label>Email: </label>
                    <input name="email" type="email" onChange={(e)=> {setUsers(e.target.email=e.target.value)}}/> <br />
                    <label>Username: </label>
                    <input name = "id" type="text" onChange={(e)=> {setUsers(e.target.username= e.target.value)}}/> <br />
                    <label>Password: </label>
                    <input name = "password" type="password" onChange={(e)=>{setUsers(e.target.password=e.target.value)}}/> <br />
                    <button onClick={submitPost}>Submit</button>
                </div>
                <p>handled response here</p>
                    {/* <div>{data.fname} {msg}</div> */}
            </div>
    )
}
export default CreateUser