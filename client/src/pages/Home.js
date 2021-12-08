import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from '../assets/blackSquare copy.jpg'; 
import SearchModal from '../components/SearchModal';
import {Below} from '../components/Below'
import logo from '../assets/fivestar_logo2-01.png'
import Card from '@mui/material/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import SearchDrink from '../components/SearchDrink';
export default function Home() {
  return (
    <Grid>
      <Container sx={{
            backgroundImage: `url(${Image})`, 
            minWidth: "100%",
            pt: 5,
            pb: 10
          }}
        >
          <Container maxWidth="lg">
          <Card sx={{
            backgroundColor: 'transparent'
          }}>
          <CardActionArea>
            <CardMedia
              component="img" src={logo}
              title="logo"
            />
          </CardActionArea>
        </Card>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <SearchModal/>
              <SearchDrink/>
            </Stack>
          </Container>
       </Container>
       <Below/>
       </Grid>
  );
}