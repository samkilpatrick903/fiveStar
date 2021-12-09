import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "../assets/blackSquare copy.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "black",
    color: "white",
    boxShadow: "0px 0px 0px 3px #FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    font: "Monteserrat",
  },
  button: {
    backgroundColor: "#D9310B",
    borderRadius: 1,
    color: "white",
    marginTop: '20px'
  },
}));

export const Below = () => {
  const classes = useStyles();
  const state = [
    {
      location_name: "Lala's Little Nugget",
      address: "2207 Justin Ln, Austin, TX 78757",
      up_votes: "5",
      drink_names: "Naughty Nugget",
    },
    {
      location_name: "Wonder Bar",
      address: "11500 Rock Rose Ave suite d, Austin, TX 78758",
      up_votes: "9",
      drink_names: "Wonder Water",
    },
    {
      location_name: "Easy Tiger",
      address: "6406 N I-35 Frontage Rd. Suite 1100 Austin, TX 78752",
      up_votes: "3",
      drink_names: "Lucky Buck",
    },
  ];

  return (

    <Grid
      container
      spacing={{ xs: 1, md: 2 }}
      className={classes.root}
      sx={{
        pt: 4,
        backgroundImage: `url(${Image})`,
        minWidth: "100vw",
        height: "100vh",
        boxShadow: "1px 2px 2px 2px #1C0B03",
      }}
    >

      {state.map((data) => (
        <Grid key={data.location_name} item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.location_name}
                <hr />
              </Typography>
              <Typography variant="body2">{data.address}</Typography>
              <Typography variant="body1">
                <br />
                Top drink:
                <br />
                {data.drink_names}
              </Typography>
              <CardActionArea className={classes.cardaction}>
                <Button className={classes.button} size="small">
                  Check out {data.location_name}!
                </Button>
              </CardActionArea>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
