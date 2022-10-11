import { Box, Button, Card, CardContent, Grid, List, ListItem, Typography } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from "react-router-dom";
import AddressSingleCardDetails from './AddressSingleCardDetails';
import ProjectSingleCardDetails from './ProjectSingleCardDetails';
import ProjectStatusSingleCardDetails from './ProjectStatusSingleCardDetails';
import SupplierSingleCardDetails from './SupplierSingleCardDetails';
import { useNavigate } from 'react-router-dom';


const IndividualProjectDetails = () => {

    const {id} = useParams();
    const [singleProjectDetails, setsingleProjectDetails] = useState([]);
    const navigate = useNavigate();
    

    

    useEffect(() => {
      axios.get(`http://localhost:3001/project/${id}`)
      .then((response)=>{
        let pIdData = response.data[0];
        // dataRef.current = [pIdData];
        // console.log(dataRef.current);
        setsingleProjectDetails(pIdData);

        setsingleProjectDetails((prevState)=>{
        
            return prevState;
            
        });
        // console.log(singleProjectDetails)
    
      }).catch((err)=>{
        console.log(err);
      })
    }, []);

    const handleProjectDetails = () => {
      // console.log("huvgru")
      navigate("/report/pdfreport")
    }
    
  return (
    <div>
        <Grid container spacing={2}>

            <ProjectSingleCardDetails ProjectDetails={singleProjectDetails}/>
            <AddressSingleCardDetails ProjectDetails={singleProjectDetails}/>
            <SupplierSingleCardDetails ProjectDetails={singleProjectDetails}/>
            <ProjectStatusSingleCardDetails ProjectDetails={singleProjectDetails}/>
        </Grid>

       
<div className='my-5'>
<button type="button" className="btn btn-outline-info btn-block font-weight-bold" onClick={handleProjectDetails}>Project Details</button>
</div>
        
        </div>
  )
}

export default IndividualProjectDetails