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

////------Probando las rutas en el backend-------
// app.get('/probando', (req,res)=> {
//     console.log("Se ha ejecutado probando");
// //hay que utilizar Back stich
//     return res.status(200).send(` 
//         <div>
//             <h1>Probando retornando un Div en Backend</h1>
//             <h2>Its Working! we did it</h2>
//         </div>
//         `);
// });
////------Probando las rutas en el backend-------

app.get('/users', (req,res)=>{
    res.send({express:"Users detail data will be displayed here"})
})

//process user request api route
app.post('/newuser', (req, res) => {
    console.log(req.body.fname)
    const fname = req.body.fname;
    const email = req.body.email;
    const username = req.body.username; 
    const password = req.body.password;
    const rs = {fname,email,username,password}
    console.log(fname + " " + email + " " + username + "  " + password + " data recieved from client");
    console.log(JSON.stringify(rs))

    //store the username and password using module 10 lesson 9 example to json file
    if(!rs.fname ||!rs.email){ 
        let reply ={
            info:"Please complete the form before you submit it"
        }
        res.send(reply);
        }else{ 
            obj.user.push ( { 
                fname:req.body.fname,
                email:req.body.email,
                username:req.body.username,
                password:req.body.password
             });
            let data = JSON.stringify(obj, null, 2);  
            fs.writeFile('dataset.json', data, confirm);


            //console.log('new user added to dataset.json')
            function confirm(err)
            {         
            let reply={
                name:req.body.fname,
                status:"success",
                info:` :Data is recived thank you  ${fname}`
             }
            
             res.send(reply);
             console.log(reply);

          }     
       }

});



//const leer el json y sacarlo por pantalla en newuser

app.get("/newuser", (req,res) => {  
     const data1 = fs.readFileSync('dataset.json', 'utf-8');
     res.send(data1); 
});


// app.get('/user/:fname', (req,res)=>{
//     console.log("search with parameter");
//     console.log( req.params.fname);  
//     if(req.params.fname=="tg");
//     res.send("OK will fetch data and send u");
    
//     //search data that match the given name in the array ds and send it back as response
// })


//search by name as parameter in url
app.get('/search/:fname', (req,res)=>{ 
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
                 for (var i = 0, l = obj.length; i < l; i++) {//loop through all json data that exists inside obj
                    var myobj = obj[i].fname; //extract name of each object from the json data                   
                    if(val === myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                        name:req.params.fname,//value from user parm
                        email:obj[i].email, //corresponding property and value of that particular obj
                        username:obj[i].username,
                        password:obj[i].password,                        
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


app.get('/listall', (req,res)=>{ 
    const file_location = './dataset.json';
    if (fs.existsSync(file_location)) {
        if(_.isEmpty(obj)) {
            res.send("There is no user information try again")
        }else{
            var data = fs.readFileSync('dataset.json', 'utf8');
            obj= JSON.parse(data);
          // obj=data;
           console.log(obj);
           console.log("Lenght" + obj.length);
            var matchingdata={};//create empty obj to store multiple search results
            //var val = req.params.fname;
            matchingdata = [] //define the object to store array value
                 for (var i = 0, l = obj.length; i < l; i++) {//loop through all json data that exists inside obj
                  //  var myobj = obj.user[i].fname; //extract name of each object from the json data                   
                  //  if(val === myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                     //   name:req.params.fname,//value from user parm
                        name:obj[i].name,
                        email:obj[i].email, //corresponding property and value of that particular obj
                        username:obj[i].username,
                        password:obj[i].password,                        
                    } //end of obj
                    matchingdata.push(reply); //store the matching json data in the empty array      
                    console.log(JSON.stringify(matchingdata) + "is the matching data");    
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
app.post('/delete/:fname', (req,res)=>{ 
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
                 for (var i = 0, l = obj.length; i < l; i++) {//loop through all json data that exists inside obj
                    var myobj = obj[i].fname; //extract name of each object from the json data 

                    if(val != myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                        name:obj[i].name,//value from user parm
                        email:obj[i].email, //corresponding property and value of that particular obj
                        username:obj[i].username,
                        password:obj[i].password,                        
                    } //end of obj

                    matchingdata.push(reply); //store the matching json data in the empty array      
                    console.log(JSON.stringify(matchingdata) + "is the matching data with delete Student");  
                   // let data = JSON.stringify(matchingdata, null, 2);  
                    fs.writeFileSync('dataset.json', JSON.stringify(matchingdata));
                    //fs.writeFile('dataset.json', data, confirm);

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
