import React from 'react';
import { Box, Card, CardContent, Grid, List, ListItem, Typography } from '@material-ui/core';

const ProjectSingleCardDetails = (props) => {
  return (
    <Grid item xs={12} md={6} lg={6}>
    <Card variant='outlined'> 
                  <CardContent >
                      
  <div className='ml-3 text-center'>
  <List  component="nav" aria-label="mailbox folders">
    <ListItem >
    <Typography sx={{fontWeight: 'bold'}} variant="h6">ProjectID &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    : </Typography>
    
     <span className='ml-4 '>{props.ProjectDetails.project_id}</span>
    </ListItem>
    
    <ListItem>
    <Typography sx={{fontWeight: 'bold'}} variant="h6">Project Name &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;:</Typography> 
    <span className='ml-4 font-weight-bold'>{props.ProjectDetails.project_name}</span>
    </ListItem>
    <ListItem>
    <Typography sx={{fontWeight: 'bold'}} variant="h6">Project Manager &nbsp; &nbsp;&nbsp;:
    </Typography> 
     <span className='ml-4 font-weight-bold'>{props.ProjectDetails.project_manager}</span>
    </ListItem>
  
    <ListItem>
    <Typography sx={{fontWeight: 'bold'}} variant="h6">Start Date  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
    </Typography> <span className='ml-4'>{props.ProjectDetails.start_date}</span>
    </ListItem>
  </List>
  </div>
                     
                  </CardContent>
              
          </Card>
    </Grid>
  )
}

export default ProjectSingleCardDetails