import React from 'react';
import { Box, Card, CardContent, Grid, List, ListItem, Typography } from '@material-ui/core'

const AddressSingleCardDetails = (props) => {
  return (
    

<Grid item xs={12} md={6} lg={6}>
  <Card variant='outlined'> 
                <CardContent >
                    
<div className='ml-3 text-center'>
<List  component="nav" aria-label="mailbox folders">
  <ListItem >
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Site Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  : </Typography>
  
   <span className='ml-4 font-weight-bold'>#{props.ProjectDetails.site_address}</span>
  </ListItem>
  
  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Railway Station &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;:</Typography> 
  <span className='ml-4 '>{props.ProjectDetails.railway_station}</span>
  </ListItem>
  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Budget &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
  </Typography> 
   <span className='ml-4 font-weight-bold'>₹ {props.ProjectDetails.budget}</span>
  </ListItem>

  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">End Date  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
  </Typography> <span className='ml-4'>{props.ProjectDetails.end_date}</span>
  </ListItem>
</List>
</div>
                   
                </CardContent>
            
        </Card>
  </Grid>
  )
}

export default AddressSingleCardDetails