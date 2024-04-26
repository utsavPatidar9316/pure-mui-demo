import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from "next/image";

import { container_data } from '@/app/utils/data';



export default function SimpleContainer() {
  return (
    <React.Fragment>


      <Box sx={{ bgcolor: '#624bff', height: '160px', width: '100%', padding: '0px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 'auto', padding: '40px 20px 0px 20px', maxWidth: '1200px', alignItems: 'center' }}>
          <Box sx={{ fontSize: '24px', color: 'white' }}>Project</Box>
          <Button variant="contained" size="large" sx={{
            bgcolor: 'white',
            color: 'black',
            '&:hover': {
              bgcolor: 'white',
              color: 'black'
            }
          }}>
            Create New Project
          </Button>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', top: -30, left: 0, margin: "10px" }}>
        <Grid container spacing={2}>
          {container_data.map((item: any, key: any) => (
            <Grid key={key.id} item xs={12} sm={6} md={6} lg={3}>

              <Box sx={{
                bgcolor: 'white',  color: 'black', borderRadius: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

              }}>
                <Box sx={{display:'flex',justifyContent:"space-between"}}>
                  <Box padding={2}>
                    <Box >
                      {item.title}
                    </Box>
                    <Box>
                      {item.number}
                    </Box>
                    <Box>
                      {item.completed}
                    </Box>
                  </Box>
                  <Box >
                  <Image src={item.src} alt={item.title} width={150} height={150} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}