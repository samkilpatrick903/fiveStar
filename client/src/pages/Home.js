import React from 'react';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '../assets/beer.jpg'; 
import SearchModal from '../components/SearchModal';
import {Below} from '../components/Below'
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        
        

        <Box 
          sx={{
            backgroundImage: `url(${Image})`, 
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
           
        
           
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              FiveStar Drinks
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Explore the best drinks in Austin! 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <SearchModal/>
              <Button variant="contained">Browse Favorites</Button>
            </Stack>
          </Container>
        </Box>
       <Below/>
      </main>
    </ThemeProvider>
  );
}
{/* <Container sx={{backgroundImage: `url(${Image})`, py: 8 }} maxWidth="lg">

<Grid container spacing={4}>
  {cards.map((card) => (
    <Grid item key={card} xs={12} sm={6} md={4}>
      <Card sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
     
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>
</Container> 
*/}