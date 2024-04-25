import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const dummyData = [
  { id: 1, text: 'Box 1' },
  { id: 2, text: 'Box 2' },
  { id: 3, text: 'Box 3' },
  { id: 4, text: 'Box 4' }
];

export default function SimpleContainer() {
  return (
    <React.Fragment>


      <Box sx={{ bgcolor: '#624bff', height: '160px', width: '100%', padding: "0px" }} >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: "auto", padding: "40px 20px 0px 20px" }}>
          <Box>Project</Box>
          <Button variant="contained" size="large" sx={{
            bgcolor: 'white', color: 'black', '&:hover': {
              bgcolor: 'white', color: 'black'
            }
          }} >
            Create New Project
          </Button>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', top: -30, left: 0, margin: "10px" }}>
        <Grid container spacing={2}>
          {dummyData.map(item => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{
                bgcolor: 'white', height: 100, color: 'black', borderRadius: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',textAlign:"center",lineHeight:"100px"
              }}>
                {item.text}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}