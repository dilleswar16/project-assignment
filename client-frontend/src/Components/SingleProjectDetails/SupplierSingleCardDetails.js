import React from 'react';
import { Box, Card, CardContent, Grid, List, ListItem, Typography } from '@material-ui/core';

const SupplierSingleCardDetails = (props) => {
  return (
    <Grid item xs={12} md={6} lg={6}>
  <Card variant='outlined'> 
                <CardContent >
                    
<div className='ml-3 text-center'>
<List  component="nav" aria-label="mailbox folders">
  <ListItem >
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Supplier 1 &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  : </Typography>
  
   <span className='ml-4 '>{props.ProjectDetails.supplier_1}</span>
  </ListItem>
  
  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Contact Person &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;:</Typography> 
  <span className='ml-4'>{props.ProjectDetails.contact_person}</span>
  </ListItem>
  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Phone  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;:
  </Typography> 
   <span className='ml-4 font-weight-bold'>{props.ProjectDetails.phone}</span>
  </ListItem>

  <ListItem>
  <Typography sx={{fontWeight: 'bold'}} variant="h6">Email  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;: 
  </Typography> <span className='ml-4'>{props.ProjectDetails.email}</span>
  </ListItem>
</List>
</div>
                   
                </CardContent>
            
        </Card>
  </Grid>

  )
}

export default SupplierSingleCardDetails