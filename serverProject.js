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
//create an array to store course data and save it to file system
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
                        courseId:obj.course[i].CourseID                     
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
                        courseId:obj.course[i].CourseID                      
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

//Adding new course in Admin Page
app.get("/addnewCourse", (req,res) => {  
    const data1 = fs.readFileSync('course.json', 'utf-8');
    res.send(data1); 
});

app.post('/addnewCourse', (req, res) => {
    const major = req.body.Major;
    const program = req.body.Program;
    const coursename = req.body.CourseName; 
    const startdate = req.body.StartDate;
    const enddate = req.body.EndDate;
    const deliverymode = req.body.DeliveryMode;
    const seatsavailable = req.body.SeatsAvailable;
    const tuition = req.body.Tuition;
    const term = req.body.Term;
    const schedule1 = req.body.Schedule1;
    const schedule2 = req.body.Schedule2;
    const rs = {major,program,coursename,startdate,enddate,deliverymode,seatsavailable,tuition,term,schedule1,schedule2}
    console.log(JSON.stringify(rs))

    //store the username and password using module 10 lesson 9 example to json file
    if(!rs.major){ 
        let reply ={
            info:"Please complete the form before you submit it"
        }
        res.send(reply);
        console.log(reply);
        }else{ 
            obj.course.push( { 
                Major:req.body.Major,
                Program:req.body.Program,
                Name:req.body.CourseName,
                StartDate:req.body.StartDate,
                EndDate:req.body.EndDate,
                DeliveryMode:req.body.DeliveryMode,
                SeatsAvailable:req.body.SeatsAvailable,
                Tuition:req.body.Tuition,
                Term:req.body.Term,
                Schedule1:req.body.Schedule1,
                Schedule2:req.body.Schedule2
             });
            let data = JSON.stringify(obj, null, 2);  
            fs.writeFile('course.json', data, confirm);

            function confirm(err)
            {         
            let reply={
                name:req.body.CourseName,
                status:"success",
                info:` :Data is recived thank you  ${coursename}`
             }
            
             res.send(reply);
             console.log(reply);

          }     
       }

});

//Get register information
app.get('/showRegistered/:courseId',(req,res)=>{
    const file_location = './register.json';
    if (fs.existsSync(file_location)) {
        if(_.isEmpty(obj)) {
            res.send("There is no course information try again")
        }else{
            var data = fs.readFileSync('register.json', 'utf8');
            obj= JSON.parse(data);
            var matchingdata={};//create empty obj to store multiple search results
            var val = req.params.courseId;
            matchingdata = [] //define the object to store array value
                 for (var i = 0, l = obj.register.length; i < l; i++) {//loop through all json data that exists inside obj
                    var myobj = obj.register[i].CourseID; //extract name of each object from the json data                   
                    if(val === myobj){ //check if the user param is matching with the json data
                       let reply={//If matching data found, store it's detail as object
                        studentId:obj.register[i].StudentID,
                        courseId:req.params.courseId                      
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
