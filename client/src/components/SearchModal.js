import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { GET_SEARCH } from "../utils/queries";
import { Link } from "react-router-dom";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const [getSearch, { loading, data }] = useLazyQuery(GET_SEARCH, {
    variables: search,
  });
  if (loading) return "loading...";
  const { venue } = data || {};
  console.log(venue);
  console.log(search);
  const arr1 = [];

  const fuck = venue;
  arr1.push(fuck);
 
  const resData = arr1.map((yes) => ({
    name: yes?.location_name || "",
    address: yes?.address || "",
    drinks: yes?.drink_names || "",
    //reviews: yes?.recommendations[0]._id || "",

  }));

  console.log(resData);
  console.log(arr1);
 

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "#D9310B",
          font: "Monteserrat",
          fontSize: "1.5em",
        }}
      >
        Browse Venues
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#D9310B",
            fontFamily: "Monteserrat",
            fontSize: "1em",
            elevation: 2
          }}
        >
          <Toolbar>
          
          <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close">
            <CloseIcon />
            </IconButton>

            <Box
              sx={{ pl: "1rem" }}
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                getSearch({
                  variables: { location_name: search.searchInput },
                });
              }}
            >
              <TextField
                variant="outlined"
                endAdornment
                sx={{ disableUnderline: true }}
                margin="normal"
                required
                fullWidth
                name="searchInput"
                label="Search Venues"
                type="searchInput"
                id="searchInput"
                autoComplete="search"
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="fingerprint"
                        color="secondary"
                        type="submit"
                      >
                        <Fingerprint sx={{ color: "black" }}/>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

       

          </Toolbar>
        </AppBar>

        <List>
     
          {resData.map((loc) => (
            <div key={loc.address}>
              <Link
                to={{
                  pathname: "/venueresults",
                  state: loc, 
                }}
              >
                <ListItem button></ListItem>
                <ListItem button>
                 
                  <ListItemText
                    sx={{ BackgroundColor: "transparent" }}
                    primary={loc.name}
                    secondary={loc.address}
                  />
                </ListItem>
              </Link>

              <Divider />
            </div>
          ))}

         
        </List>
      </Dialog>
    </div>
  );
}
