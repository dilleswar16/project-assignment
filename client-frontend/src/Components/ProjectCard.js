import { Box, Grid } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProjectCradItem from "./ProjectCradItem";

const ProjectCard = () => {

const [getDashBoarddata, setgetDashBoarddata] = useState([]);

useEffect(() => {
  axios.get("http://localhost:3001/dashboard")
  .then((response)=>{
    setgetDashBoarddata(response.data);
    setgetDashBoarddata((prevState)=>{
        // console.log(prevState);
        return prevState;
    })
  })
}, []);
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} style={{position:"inherit"}}>
      <Grid container spacing={3} direction="row" >

        {
            getDashBoarddata.map((projectData,index)=>{
                
        return (<ProjectCradItem key={index} projectData={projectData}/>)
       
            })
            
        }
        
        
      </Grid>
      </Box>
    </div>
  )
}

export default ProjectCard