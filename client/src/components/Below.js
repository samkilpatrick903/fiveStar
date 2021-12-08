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
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  card: {
    backgroundColor: "black",
    color: "white",
    flexGrow: 1,
  },
  button: {
    backgroundColor: "#D9310B",
    borderRadius: 1,
    color: 'white'
  },
}));

export const Below = () => {
  const classes = useStyles();
  const state = [
    {
      location_name: "Lala's Little Nugget",
      address: "2207 Justin Ln, Austin, TX 78757",
      up_votes: "5",
      drink_names: ["Naughty Nugget", "Buddy's Elf Fashioned", "Lump of Cole"],
    },
    {
      location_name: "Wonder Bar",
      address: "11500 Rock Rose Ave suite d, Austin, TX 78758",
      up_votes: "9",
      drink_names: ["Wonder Water", "Austin Jackass", "Livin’ My Best Life"],
    },
    {
        location_name: "Easy Tiger",
        address: "6406 N I-35 Frontage Rd. Suite 1100 Austin, TX 78752",
        up_votes: "3",
        "drink_names": ["Lucky Buck", "Rye of the Tiger", "Cadillac Coffee"],
      }
  ];
  return (
    <Grid sx={{ backgroundColor: "black", minWidth: "100%", justifyContent:'center'}} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 6, sm: 10, md: 12 }} className={classes.root}>
      {state.map((data) => (
        <Grid key={data.location_name} item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.location_name}
                </Typography>
                <Typography className={classes.card} variant="body2" color="textSecondary" component="p">
                  {data.address}
                </Typography>
                <Typography className={classes.card} variant="body1" color="textSecondary" component="p">
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
