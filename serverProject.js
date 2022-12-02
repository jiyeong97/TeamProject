import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 5000;
import cors from 'cors';
import fs from 'fs';
import _ from 'underscore';

app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}` ));

//===============================================================
//create an array to store user data and save it to file system
var exists = fs.existsSync('course.json');
if (exists) {
    console.log('loading course data');
    var data = fs.readFileSync('course.json', 'utf8');
    obj= JSON.parse(data);
} else {
    console.log('Created new dataset object')
    var obj= {course:[]};
}

//===============================================================

//API's
app.get('/', (req,res)=>{
    res.send({express:"Your server is connected to your react app"})
})

//ShowCourse by Program in url
app.get('/showCourseByProgram/:Program',(req,res)=>{
    const file_location = './course.json';
    if (fs.existsSync(file_location)) {
        if(_.isEmpty(obj)) {
            res.send("There is no course information try again")
        }else{
            var data = fs.readFileSync('course.json', 'utf8');
            obj= JSON.parse(data);
            var matchingdata={};//create empty obj to store multiple search results
            var val = req.params.Program;
            matchingdata = [] //define the object to store array value
                 for (var i = 0, l = obj.course.length; i < l; i++) {//loop through all json data that exists inside obj
                    var myobj = obj.course[i].Program; //extract name of each object from the json data                   
                    if(val === myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                        program:req.params.Program,
                        name:obj.course[i].Name, //corresponding property and value of that particular obj
                        startdate:obj.course[i].StartDate,
                        enddate:obj.course[i].EndDate,
                        deliverymode:obj.course[i].DeliveryMode,
                        seatsavailable:obj.course[i].SeatsAvailable,
                        tuition:obj.course[i].Tuition,
                        term:obj.course[i].Term,
                        schedule1:obj.course[i].Schedule1,
                        schedule2:obj.course[i].Schedule2,                     
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

app.get('/showCourseByName/:name',(req,res)=>{
    const file_location = './course.json';
    if (fs.existsSync(file_location)) {
        if(_.isEmpty(obj)) {
            res.send("There is no course information try again")
        }else{
            var data = fs.readFileSync('course.json', 'utf8');
            obj= JSON.parse(data);
            var matchingdata={};//create empty obj to store multiple search results
            var val = req.params.name;
            matchingdata = [] //define the object to store array value
                 for (var i = 0, l = obj.course.length; i < l; i++) {//loop through all json data that exists inside obj
                    var myobj = obj.course[i].Name; //extract name of each object from the json data                   
                    if(val === myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                        name:req.params.name,
                        program:obj.course[i].Program, //corresponding property and value of that particular obj
                        startdate:obj.course[i].StartDate,
                        enddate:obj.course[i].EndDate,
                        deliverymode:obj.course[i].DeliveryMode,
                        seatsavailable:obj.course[i].SeatsAvailable,
                        tuition:obj.course[i].Tuition,
                        term:obj.course[i].Term,
                        schedule1:obj.course[i].Schedule1,
                        schedule2:obj.course[i].Schedule2,                     
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