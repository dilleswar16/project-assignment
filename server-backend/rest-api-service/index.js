const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bhumio"
})
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));


app.listen(3001,()=>{
    console.log("Running on port 3001");
})

app.get('/dashboard',(req,res) => {
    const sqlFetchData = "select * from project_details";
    db.query(sqlFetchData,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })

});

app.get('/project/:id',(req,res) => {
    const projectId = req.params.id;
    const sqlGetSingleData = `select * from project_details where project_id =${projectId}`;
    // console.log(req.params.id);
    // console.log("hhjjj")
    db.query(sqlGetSingleData,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        else {
            
            // rows[0].start_date = rows[0].start_date.toString().slice(0,10);
            // res.send(rows);
            rows[0].start_date = JSON.stringify(rows[0].start_date).slice(1,11);
            rows[0].end_date = JSON.stringify(rows[0].end_date).slice(1,11);
            let project_status_arr = rows[0].project_status.split(",");
            rows[0].project_status = project_status_arr;
            res.send(rows);
            // console.log(rows[0].start_date = rows[0].start_date.toString());
        }
    });
});

app.get('/report/pdfreport',(req,res) => {
    const sqlFetchData = "select project_id,project_name,budget from project_details";
    db.query(sqlFetchData,(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })
})

app.post('/createproject',(req,res) => {
    const projectId = req.body.projectId;
    const projectName = req.body.projectName;
    const projectManager = req.body.projectManager;
    const startDate = req.body.startDate;
    const siteAddress = req.body.siteAddress;
    const railwayStation = req.body.railwayStation;
    const budget = req.body.budget;
    const endDate = req.body.endDate;
    const supplier1 = req.body.supplier1;
    const contactPerson = req.body.contactPerson;
    const phone = req.body.phone;
    const email = req.body.email;
    const projectStatus = req.body.projectStatus;
    const sqlInsert = "INSERT INTO project_details" + 
    "(project_id, project_name, project_manager, start_date, site_address, railway_station, budget, end_date, supplier_1, contact_person, phone, email, project_status)" +
     "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(sqlInsert,[projectId,projectName,projectManager,startDate,siteAddress,
        railwayStation,budget,endDate,supplier1,contactPerson,phone,email,projectStatus],(err,rows,fields)=>{
        if(err){
            console.log(err);
        }
        else {
            console.log("sucess");
            res.send("Successfully Added");
        }
    })

})
