import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import SearchModal from "../components/SearchModal";
import { Below } from "../components/Below";
import logo from "../assets/fivestar_logo2-01.png";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@material-ui/core/CardMedia";
import SearchDrink from "../components/SearchDrink";

export default function Home() {

  return (
    <Grid>
      <Container
        sx={{
          backgroundColor: "black",
          minWidth: "100%",
          pt: 5,
          pb: 5,
          boxShadow: "2px 2px 2px 2px #FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <CardMedia component="img" src={logo} title="logo" />
          </Card>
          <Stack
            sx={{ mt: 6 }}
            direction="row"
            spacing={3}
            justifyContent="center"
            padding={3}
          >
            <SearchModal />
            <SearchDrink />
            <Button
        variant="contained"
        onClick={(e)=>{
          e.preventDefault();
          window.location.assign('/adder')
        }}
        sx={{
          backgroundColor: "#D9310B",
          font: "Monteserrat",
          fontSize: "1.5em",
        }}
      >
        Add a Drink
      </Button>
          </Stack>
        </Container>
      </Container>
      <Below />
    </Grid>
  );
}
