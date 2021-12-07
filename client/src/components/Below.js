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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#D9310B",
    flexGrow: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#8b1f07",
    borderRadius: 1,
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
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={classes.root}>
      {state.map((data) => (
        <Grid key={data.location_name} item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.location_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.address}
                  {data.upvotes}
                  {data.drink_names}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.button} size="small" color="black">
                Check out drinks at {data.location_name}!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
