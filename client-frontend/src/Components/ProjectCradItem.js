import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardActionArea,
     CardContent, createTheme, Grid, List, ListItem, ListItemText, Paper, 
     styled, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import IndividualProjectDetails from './SingleProjectDetails/IndividualProjectDetails';




const CompanyCard = (props) => {

  // const getFullProjectDetails = (e) => {
  //   console.log(e.this);

  // }
  const navigate = useNavigate();

  return (
    
      <Grid item xs={12} md={6} lg={6}>
        <Card variant='outlined'> 
            <CardActionArea onClick={()=>{
              console.log(props.projectData.project_id);
              navigate(`/project/${props.projectData.project_id}`);
              // return <IndividualProjectDetails />
            }}>
                <CardContent >
                    
<div className='ml-3 text-center'>
<List  component="nav" aria-label="mailbox folders">
  <ListItem >
  <Typography sx={{fontWeight: 'bold'}} variant="h6">ProjectID &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  : </Typography>
  
   <span className='ml-4 '>{props.projectData.project_id}</span>
  </ListItem>
  
  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Project Name &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;:</Typography> 
  <span className='ml-4'>{props.projectData.project_name}</span>
  </ListItem>
  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Budget &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:
  </Typography> 
   <span className='ml-4 font-weight-bold'>₹ {props.projectData.budget}</span>
  </ListItem>

  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">End date &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
  </Typography> <span className='ml-4'>{props.projectData.end_date.slice(0,10)}</span>
  </ListItem>
</List>
</div>
                   
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
      
  )
}



export default CompanyCard;