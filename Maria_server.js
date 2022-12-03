import express, { json } from 'express';
import morgan from 'morgan';
const app = express();
const port = process.env.PORT || 5000;
import cors from 'cors';
import fs from 'fs';
import _ from 'underscore';

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.json());
app.set('json spaces', 4);
app.listen(port, () => console.log(`Listening on port ${port}` ));

//===============================================================
//create an array to store user data and save it to file system
var exists = fs.existsSync('dataset.json');
if (exists) {
    console.log('loading users data');
    var data = fs.readFileSync('dataset.json', 'utf8');
    obj= JSON.parse(data);
} else {
    console.log('Created new dataset object')
    var obj= {user:[]};
}

//===============================================================

//API's
app.get('/', (req,res)=>{
    res.send({express:"Your server is connected to your react app"})
})

//get all users in the backend, localhost 5000
app.get('/users', (req,res)=>{
    res.send({express:"Users detail data will be displayed here"})
})

//process user request api route
app.post('/newuser', (req, res) => {
    console.log(req.body.name)
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const department = req.body.department;
    const program = req.body.program;
    const username = req.body.username;
    const password = req.body.password;

    const rs = {name,lastname,email,telephone, department, program, username,password}
    console.log(name + " " + email + " " + email + "  " + telephone + " data recieved from client");
    console.log(JSON.stringify(rs))

    //store the username and password 
    if(!rs.name ||!rs.email){ 
        let reply ={
            info:"Please complete the form before you submit it"
        }
        res.send(reply);
        }else{ 
            obj.user.push ( { 
                name:req.body.name,
                lastname:req.body.lastname,
                email:req.body.email,
                telephone: req.body.telephone,
                department: req.body.department,
                program: req.body.program,
                username:req.body.username,
                password:req.body.password
             });
            let data = JSON.stringify(obj, null, 2);  
            fs.writeFile('dataset.json', data, confirm);


            //console.log('new user added to dataset.json')
            function confirm(err)
            {         
            let reply={
                name:req.body.name,
                status:"success",
                info:` :Data is recived thank you  ${name}`
             }
            
             res.send(reply);
             console.log(reply);

          }     
       }

});


//get all newusers in the backend, localhost 5000, to test.

app.get("/newuser", (req,res) => {  
     const data1 = fs.readFileSync('dataset.json', 'utf-8');
     res.send(data1); 
});

//search by name as parameter in url
app.get('/search/:name', (req,res)=>{ 
    const file_location = './dataset.json';
    if (fs.existsSync(file_location)) {
        if(_.isEmpty(obj)) {
            res.send("There is no user information try again")
        }else{
            var data = fs.readFileSync('dataset.json', 'utf8');
            obj= JSON.parse(data);
           // console.log(obj);
            var matchingdata={};//create empty obj to store multiple search results
            var val = req.params.name;
            matchingdata = [] //define the object to store array value
                 for (var i = 0, l = obj.user.length; i < l; i++) {//loop through all json data that exists inside obj
                    var myobj = obj.user[i].name; //extract name of each object from the json data                   
                    if(val === myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                        name:obj.user[i].name,
                        lastname:obj.user[i].lastname,
                        email:obj.user[i].email,
                        telephone:obj.user[i].telephone,
                        department:obj.user[i].department, //corresponding property and value of that particular obj
                        program:obj.user[i].program,
                        username:obj.user[i].username,
                        password:obj.user[i].password,                        
                    } //end of obj
                    matchingdata.push(reply); //store the matching json data in the empty array      
                    console.log(JSON.stringify(matchingdata) + "is the matching data");    
                }//end of if 
                }//end of for loop 
                var rese={
                    success:true,
                    code:200,
                    profile:matchingdata
                };                
                res.send(matchingdata);//end of res.send
        }//end of else statement
    //}//end of if statement
}else{
    var rese={success:false,code:404, data:"No matching data found"};                
    res.send(rese);
}
})

//listall users registered for display in the frontend
app.get('/listall', (req,res)=>{ 
    const file_location = './dataset.json';
    if (fs.existsSync(file_location)) {
        if(_.isEmpty(obj)) {
            res.send("There is no user information try again")
        }else{
            var data = fs.readFileSync('dataset.json', 'utf8');
            obj= JSON.parse(data);
           // console.log(obj);
            var matchingdata={};//create empty obj to store multiple search results
            //var val = req.params.fname;
            matchingdata = [] //define the object to store array value
                 for (var i = 0, l = obj.user.length; i < l; i++) {//loop through all json data that exists inside obj
                  //  var myobj = obj.user[i].fname; //extract name of each object from the json data                   
                  //  if(val === myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                     //   name:req.params.fname,//value from user parm
                        name:obj.user[i].name,
                        lastname:obj.user[i].lastname,
                        email:obj.user[i].email,
                        telephone:obj.user[i].telephone,
                        department:obj.user[i].department, //corresponding property and value of that particular obj
                        program:obj.user[i].program,
                        username:obj.user[i].username,
                        password:obj.user[i].password,                        
                    } //end of obj
                    matchingdata.push(reply); //store the matching json data in the empty array      
                 //   console.log(JSON.stringify(matchingdata) + "is the matching data");    
         //       }//end of if 
                }//end of for loop 
                var rese={
                    success:true,
                    code:200,
                    profile:matchingdata
                };                
                res.send(matchingdata);//end of res.send
        }//end of else statement
    //}//end of if statement
}else{
    var rese={success:false,code:404, data:"No matching data found"};                
    res.send(rese);
}
})


//delete by name as parameter in url
app.delete('/delete/:fname', (req,res)=>{ 
    const file_location = './dataset.json';
    if (fs.existsSync(file_location)) {
        if(_.isEmpty(obj)) {
            res.send("There is no user information try again")
        }else{
            var data = fs.readFileSync('dataset.json', 'utf8');
            obj= JSON.parse(data);
           // console.log(obj);
            var matchingdata={};//create empty obj to store multiple search results
            var val = req.params.fname;
            matchingdata = [] //define the object to store array value
                 for (var i = 0, l = obj.user.length; i < l; i++) {//loop through all json data that exists inside obj
                    var myobj = obj.user[i].fname; //extract name of each object from the json data 

                    //if(val === myobj){ //check if the user param is matching with the json data
                    if(val != myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                        name:req.params.fname,//value from user parm
                        email:obj.user[i].email, //corresponding property and value of that particular obj
                        username:obj.user[i].username,
                        password:obj.user[i].password,                        
                    } //end of obj

                   // matchingdata.filter(reply); //store the matching json data in the empty array    
                    matchingdata.push(reply); //store the matching json data in the empty array   
                   // console.log(JSON.stringify(matchingdata) + "is the matching data with delete Student");  
                    let data = JSON.stringify(matchingdata, null, 2);  
                    fs.writeFile('dataset.json', data, confirm);

                }//end of if 
                }//end of for loop 
                var rese={
                    success:true,
                    code:200,
                    profile:matchingdata
                };                
                res.send(matchingdata);//end of res.send
        }//end of else statement
    //}//end of if statement
}else{
    var rese={success:false,code:404, data:"No matching data found"};                
    res.send(rese);
}
})