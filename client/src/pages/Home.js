import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Image from '../assets/oldfashioned.jpg';
import SearchModal from "../components/SearchModal";
import { Below } from "../components/Below";
import logo from "../assets/fivestar_logo2-01.png";
import Card from "@mui/material/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import SearchDrink from "../components/SearchDrink";

import AuthService from "../utils/auth";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (AuthService.loggedIn()) {
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Grid>
      <Container
        sx={{
          backgroundColor: "black",
          //backgroundImage: `url(${Image})`,
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
          </Stack>
        </Container>
      </Container>
      <Below />
    </Grid>
  );
}
