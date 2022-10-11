const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const pdf = require("pdf-creator-node");
const fs = require('fs');

const options = {
    format : "A4",
    orientation:"potrarit"
}



app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

const template = fs.readFileSync("./template/template.html","utf-8")


app.post('/generatePDF',(req,res)=>{

    const date = new Date();
const temp = date.valueOf();
// console.log(`projectDetails${temp}`);

    const project = req.body.projectData;
    let signTeller = req.body.sign;
    // console.log(project);
    // console.log(signTeller);
    if(signTeller){
        signTeller = 'Signed By the Document 😄';
    }
    else {
        signTeller = '';
    }
    res.send("success");
    
    const document = {
        html: template,
        data: {
            projectData:project,
            signStatus:signTeller
        },
        path:`./pdfs/projectDetails${temp}.pdf`,
    }
    
    pdf.create(document,options).then(
        (res)=>{
            console.log(res);
        }
    ).catch((err)=>{
        console.log(err);})

})





app.listen(3002,()=>{
    console.log("Running on port 3002");
})