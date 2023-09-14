import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from '@/components/MediaCard';

async function getData() {
  const res = await fetch('https://rest.8kas.com/api/articles')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function HomePage() {
   const data = await getData()
   const {list} = data;
  return (
    <Box>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {
            list?.map((item:any, index:number) => (
                <Grid key={index} sm={6} xs={12} lg={3} md={4} xl={2}>
            <MediaCard
              heading={item.title}
              text="The CMYK color model (also known as process color, or four color) is a subtractive color model, based on the CMY color model, used in color printing, and is also used to describe the printing process itself."
            />
          </Grid>))
          }
        
        </Grid>
    </Box>
  );
}