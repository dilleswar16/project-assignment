import { Box, Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProject = () => {

    const [projectId, setprojectId] = useState()
    const [projectName, setprojectName] = useState('')
    const [projectManager, setprojectManager] = useState('')
    const [startDate, setstartDate] = useState('')
    const [siteAddress, setsiteAddress] = useState('')
    const [railwayStation, setrailwayStation] = useState('')
    const [budget, setbudget] = useState()
    const [endDate, setendDate] = useState('')
    const [supplier1, setsupplier1] = useState('')
    const [contactPerson, setcontactPerson] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [projectStatus, setprojectStatus] = useState('')
    const navigate = useNavigate();


    
    const saveToDatbase = () => {
        
        if(projectId==null  || projectName ==""  || projectManager ==""  ||startDate ==""  || siteAddress ==""  ||
            railwayStation ==""  || budget ==""  || endDate ==""  || supplier1 ==""  || contactPerson ==""  || phone ==""  ||
            email ==""  || projectStatus=="") {
                alert("fill all Values")
                return false;
            }
            else {
                axios.post('http://localhost:3001/createproject',{
                    projectId,projectName,projectManager,startDate,siteAddress,
                    railwayStation,budget,endDate,supplier1,contactPerson,phone,
                    email,projectStatus
                }).then(()=>{
                    alert("Successfully added");
                    navigate('/');
                })
            }
        
    }
    return (
        <Grid container spacing={2} direction="row"
        justifyContent="center"
        alignItems="center">
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="ProjectId" variant="outlined" onChange={(e)=>{
                            setprojectId(e.target.value);
                            setprojectId((value)=>{
                            // console.log(value);

                            return value});
            }} />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Project Name" variant="outlined" onChange={(e)=>{
                            setprojectName(e.target.value);
                            setprojectName((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Project Manager" variant="outlined" onChange={(e)=>{
                            setprojectManager(e.target.value);
                            setprojectManager((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField
        id="date"
        label="Start Date"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>{
            setstartDate(e.target.value);
            setstartDate((value)=>{
            // console.log(value);

            return value});
}}
      />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Site Address" variant="outlined" onChange={(e)=>{
                            setsiteAddress(e.target.value);
                            setsiteAddress((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Railway Station" variant="outlined" onChange={(e)=>{
                            setrailwayStation(e.target.value);
                            setrailwayStation((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Budget" variant="outlined" onChange={(e)=>{
                            setbudget(e.target.value);
                            setbudget((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
        <TextField
        id="date"
        label="End Date"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>{
            setendDate(e.target.value);
            setendDate((value)=>{
            // console.log(value);

            return value});
}}
      />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Supplier 1" variant="outlined" onChange={(e)=>{
                            setsupplier1(e.target.value);
                            setsupplier1((value)=>{
                            // console.log(value);

                            return value});
            }} />
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Contact Person" variant="outlined" onChange={(e)=>{
                            setcontactPerson(e.target.value);
                            setcontactPerson((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Phone" variant="outlined" onChange={(e)=>{
                            setphone(e.target.value);
                            setphone((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{
                            setemail(e.target.value);
                            setemail((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
            <TextField id="outlined-basic" label="Project Status" variant="outlined" onChange={(e)=>{
                            setprojectStatus(e.target.value);
                            setprojectStatus((value)=>{
                            // console.log(value);

                            return value});
            }}/>
            <span className='font-weight-bold ml-2'>Note:Fill Project Status with ,seperated Values</span>
            </Grid>

            
            <Grid item xs={6} md={6} lg={6}>
            
            </Grid>

            <Grid item xs={6} md={6} lg={6}>
            
            <Button variant="contained" size="large" style={{backgroundColor:'green'}} onClick={saveToDatbase}>Save to Database</Button>
            </Grid>
            
        </Grid>
    )
}

export default CreateProject