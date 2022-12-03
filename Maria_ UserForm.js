import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import Footer from '../components/Footer';

export default function UserForm() {
  const [createUser, setCreateUser] = useState({
    name: "",
    lastname: "",
    email: "",
    telephone: "",
    departament: "",
    program: "",
    username: "",
    password: "",
  });
  const[msg,setMsg]=useState("")
  
  //you can use only one handlechange method for all input elements. 
  const handleChange = (event) => {
    setCreateUser({ ...createUser, [event.target.name]: event.target.value });  //any input element name and its value
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(createUser);
    Axios.post('http://localhost:5000/newuser' , createUser)
    .then(response=>{
    setMsg(response)
    console.log(response)
    alert("The user was created!")
    window.location.replace('/ListUsers');

    })
    //clean inputbox after button clicked and form data submitted
    // setCreateUser({ fname: "", email: "", username: "", password:"" });
  };
    return (
    <div> 
      <div className='div-Container-pages-forms'>
        <form onSubmit={handleSubmit}> 
          <div>
            <h3 className='title-form'>Student Register</h3>
          </div>

          <div>
            Name<input
              type="text"
              name="name"
              placeholder="Name"
              value={createUser.name}
              onChange={handleChange}

            />     
          </div>

          <div>
          LastName<input
              type="text"
              name="lastname"
              placeholder="Name"
              value={createUser.lastname}
              onChange={handleChange}

            />
          </div>

          <div>
           Email <input
              type="email"
              name="email"
              placeholder="Email"
              value={createUser.email}
              onChange={handleChange}

            />
          </div>

          <div>
           Telephone <input
              type="text"
              name="telephone"
              placeholder="Telephone"
              value={createUser.telephone}
              onChange={handleChange}

            />
          </div>

          <div>
          Department<input
              type="text"
              name="department"
              placeholder="Department"
              value={createUser.department}
              onChange={handleChange}

            />
          </div>

          <div>
          Progran<input
              type="text"
              name="program"
              placeholder="Program"
              value={createUser.program}
              onChange={handleChange}

            />
          </div>

          <div>
           Username <input
              type="text"
              name="username"
              placeholder="Username"
              value={createUser.username}
              onChange={handleChange}

            />
          </div>

          <div>
            Password<input
              type="password"
              name="password"
              placeholder="Password"
              value={createUser.password}
              onChange={handleChange}

            />
          </div>

          <div>
            <h2></h2>
            <button>Student Register</button>
          </div>
        </form>
        <div>
          {msg.info}
        </div>      
    </div>

    <div>
      <Footer />
    </div>

</div>    
    );
  }