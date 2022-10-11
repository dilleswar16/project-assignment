import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, Grid, List, ListItem, Typography } from '@material-ui/core';

const ProjectStatusSingleCardDetails = (props) => {

  const [arrayData, setarrayData] = useState([props.ProjectDetails.project_status]);
  const [loading, setloading] = useState(true);
  const first = useRef();

  // useEffect(() => {
  //   setarrayData([props.ProjectDetails.project_status])
  //   let pIdData = arrayData;

  //       setsingleProjectDetails((prevState)=>{
  //       console.log(prevState);
  //           return prevState;
  // }, []);

  useEffect(() => {
     let pData = props.ProjectDetails.project_status;
     first.current = pData;
     setarrayData(pData);
    //  console.log(pData);
     setarrayData((prevState)=>{
      // console.log(prevState);
      return prevState
     })

     
  }, [props.ProjectDetails.project_status])
  

 

  return (
    <Grid item xs={12} md={6} lg={6}>
  <Card variant='outlined'> 
                <CardContent >
                    
<div className='ml-3 text-center'>
<List  component="nav" aria-label="mailbox folders">
  
  <ListItem >
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Project Status
  &nbsp;&nbsp;: </Typography>

   {
     arrayData && arrayData.map((project,index)=> {
      return (index === 1 ? ((
        <div className='mb-3 my-1' key={index}>
            {<span className=''>{project.includes('Ordered') ? 
 (<span key={index} className='font-weight-bold ml-4 my-1'>{project}</span>) : (<span key={index} className='ml-4'>{project}</span>)}</span>}
        </div>
      )) : (<span key={index}></span>)
  )})
  } 
{/*   
   <span className='ml-4 '>{props.ProjectDetails.project_status[0].includes('Ordered') ? 
   (<span className='font-weight-bold mx-auto'>{props.ProjectDetails.project_status[0]}</span>) : (<span className='mx-auto'>{props.ProjectDetails.project_status[0]}</span>)}</span> */}
  </ListItem>

  
  {
    arrayData && arrayData.map((project,index)=> {
        return (index ==! 0 ? (<span key={index}>

        </span>) : (
          <div className='mb-3' key={index}>
            <span key={index} className='mr-4'>{project}</span>
              {/* {<span className=''>{project.includes('Ordered') && true ? 
   (<span key={index} className='font-weight-bold mr-4'>{project}</span>) : (<span key={index} className='mr-4'>{project}</span>)}</span>} */}
          </div>
        )
    )})
  }
  
  
</List>
</div>
                   
                </CardContent>
            
        </Card>
  </Grid>

  
  
  )
}

export default ProjectStatusSingleCardDetails