import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
// import { useEffect } from "react";
// import { LoginDesktop } from "../components/LoginDesktop";
// import { Redirect } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import LocalBarTwoToneIcon from "@mui/icons-material/LocalBarTwoTone";

export const Banner = styled("div")({
  height: "4rem",
});

const theme = createTheme();

export default function SignUp() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addUser, { error, loading }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      if (error) {
        console.log(error);
      }
      if (loading) return "loading";

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://i.imgur.com/aRWuuwn.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "transparent" }}>
              <LocalBarTwoToneIcon style={{ color: "#D9310B" }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={loginSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formState.name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={formState.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formState.password}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="repeatPassword"
                label="Confirm Password"
                type="password"
                id="repeatPassword"
                autoComplete="repeat-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#D9310B" }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2"></Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already Have An Account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}