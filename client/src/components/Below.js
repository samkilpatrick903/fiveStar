import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from '../assets/dranks.jpg'; 


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    height: '100vh',
    flexGrow: 1,
    display: "flex",
    justifyContent: 'center',
  },
  card: {
    backgroundColor: "black",
    color: "white",
    boxShadow: "1px 2px 2px 2px #1C0B03"
  },
  button: {
    backgroundColor: "#D9310B",
    borderRadius: 1,
    color: 'white',
  },
  cardcontent: {
  }
}));

export const Below = () => {
  const classes = useStyles();
  const state = [
    {
      location_name: "Lala's Little Nugget",
      address: "2207 Justin Ln, Austin, TX 78757",
      up_votes: "5",
      drink_names: "Naughty Nugget, Buddy's Elf Fashioned, Lump of Cole"
    },
    {
      location_name: "Wonder Bar",
      address: "11500 Rock Rose Ave suite d, Austin, TX 78758",
      up_votes: "9",
      drink_names: "Wonder Water, Austin Jackass, Livin’ My Best Life"
    },
    {
        location_name: "Easy Tiger",
        address: "6406 N I-35 Frontage Rd. Suite 1100 Austin, TX 78752",
        up_votes: "3",
        drink_names: "Lucky Buck, Rye of the Tiger, Cadillac Coffee"
      }
  ];

  return (
    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 8, sm: 6, md: 8 }} className={classes.root}>
      {state.map((data) => (
        <Grid key={data.location_name} item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent className={classes.cardcontent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.location_name}
                </Typography>
                <Typography variant="body2" component="p">
                  {data.address}
                </Typography>
                <Typography variant="body1" component="p">
                  <br/>
                  Top drinks: 
                  <br/>
                  {data.drink_names}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.button} size="small" color="black">
                Check out {data.location_name}!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
