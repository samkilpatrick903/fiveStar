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
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useLazyQuery } from '@apollo/client';
import { GET_SEARCH } from "../utils/queries"
/*

IMPORT QUERY TO FIND DRINKS BASED ON SEARCH

*/
// const state = [
//   {
//       location_name: "Lala's Little Nugget",
//       address: "2207 Justin Ln, Austin, TX 78757",
//       up_votes: "5",
//       drink_names: ["Naughty Nugget", "Buddy's Elf Fashioned", "Lump of Cole"],
//   },
//   {
//       location_name: "Wonder Bar",
//       address: "11500 Rock Rose Ave Suite D, Austin, TX 78758",
//       up_votes: "5",
//       drink_names: ["Wonder Water", "Austin Jackass", "Livin’ My Best Life"],
//   },
// ];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const [search,setSearch]=React.useState("")
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const state = [
    {
        location_name: "Lala's Little Nugget",
        address: "2207 Justin Ln, Austin, TX 78757",
        up_votes: "5",
        drink_names: ["Naughty Nugget", "Buddy's Elf Fashioned", "Lump of Cole"],
    },
    {
        location_name: "Wonder Bar",
        address: "11500 Rock Rose Ave Suite D, Austin, TX 78758",
        up_votes: "5",
        drink_names: ["Wonder Water", "Austin Jackass", "Livin’ My Best Life"],
    },
];
  /*
   * QUERY MADE HERE THEN MAPPED OVER AND STORED IN STATE OR OBJECT
   *
   */

  const handleChange = (event) => {

    const { name, value } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
  }
  const HandleSearch=async(e)=>{
    e.preventDefault();
    //setSearch(true)
  
      // const loginBody = new FormData(e.currentTarget);
      // const x = loginBody.get("searchInput");
      // setSearch(x)
      console.log(search)  
 
     
    }
    const [getSearch,{loading,data}]= useLazyQuery(GET_SEARCH,{
      variables:search
    })
    //const result=data || {}
    if(loading) return "loading..."
    console.log(search)
const response=data
console.log(data)
    //const result=data
    console.log(getSearch)
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{backgroundColor: '#8b1f07', fontFamily: 'Monteserrat', fontSize: "1em"}}>
        Search Drinks
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Box sx={{ pl: "1rem" }} component="form" onSubmit={(e)=>{
                          e.preventDefault()
                          console.log(search)
                          getSearch({
                          variables:{location_name:search.searchInput}
                          })
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
                label="Search"
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
                        <Fingerprint />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {/* MAP OVER QUERY AND CREATE A LIST ITEM FOR EACH RESULT */}
          {state.map((loc) => (
            <div key={loc.address}>
              <ListItem button>
                {/* EACH WILL BE COINTAINED IN BUTTON THAT LINKS TOO SINGLE RESULT PAGE?? */}
                <ListItemText
                  primary={loc.drink_names[0]}
                  secondary={loc.address}
                />
              </ListItem>
              <Divider />
            </div>
          ))}

          {/* <Divider /> */}
        </List>
      </Dialog>
    </div>
  );
}
