import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Image from '../assets/beer.jpg';
import marg from "../assets/marg.jpg";
import Logo from "../assets/ML_LOGO.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {AddButton}from '../components/AddButton'
const theme = createTheme();

const cards = [
  {
    location_name: "Lala's Little Nugget",
    address: "2207 Justin Ln, Austin, TX 78757",
    up_votes: "5",
    drink_names: ["Naughty Nugget", "Buddy's Elf Fashioned", "Lump of Cole"],
    username: "Nathan",
  },
  {
    location_name: "Wonder Bar",
    address: "11500 Rock Rose Ave Suite D, Austin, TX 78758",
    up_votes: "5",
    drink_names: ["Wonder Water", "Austin Jackass", "Livin’ My Best Life"],
    username: "Todd",
  },
  {
    location_name: "Wonder Bar",
    address: "11500 Rock Rose Ave Suite D, Austin, TX 78758",
    up_votes: "5",
    drink_names: ["Wonder Water", "Austin Jackass", "Livin’ My Best Life"],
    username: "Mary Lou",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function Profile(props) {
console.log(props)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container maxWidth="sm">
     

      
      
         
          <Card sx={{ backgroundColor: "transparent", m: 5 }}>
            <CardMedia component="img" src={Logo} title="logo" />
          </Card>
          {cards.map((card) => (
            <Typography
              sx={{ display: "flex", justifyContent: "center" }}
              variant="h5"
              align="center"
              color="text.secondary">
              {" "}
              Welcome, {card.username}
            </Typography>
          ))}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt="margarita logo"
              src={marg}
              sx={{
                width: 130,
                height: 130,
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Box>
        </Container>

        <Container sx={{ py: 8, justifyContent: "center" }} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.location_name} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        font: "Monteserrat",
                      }}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.location_name}
                    </Typography>

                    {card.drink_names.map((drink, index) => (
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          font: "Monteserrat",
                        }}
                        key={index}
                      >
                        {drink}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button onClick={handleOpen} size="small">
                      View Address
                    </Button>
                  </CardActions>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    justifyContent="center"
                    display="flex"
                    font="Monteserrat"
                  >
                    Address
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      justifyContent: "center",
                      display: "flex",
                      font: "Monteserrat",
                    }}
                  >
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
                
              </Modal>
            </div>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
