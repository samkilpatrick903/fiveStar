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
// import Image from '../assets/beer.jpg'; 
//import Image from '../assets/marg.jpg'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme();

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        
        

        <Box 
          sx={{
            // backgroundImage: `url(${Image})`, 
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
              Profile 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Search Drinks</Button>
              <Button variant="contained">Browse Favorites</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{backgroundImage: `url(${Image})`, py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '100%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  /> */}
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
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}