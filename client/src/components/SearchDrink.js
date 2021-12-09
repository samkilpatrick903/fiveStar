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
import { Link } from "react-router-dom";
import { GET_DRINK } from "../utils/queries";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchDrink(props) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [result, setResult] = React.useState([
    {
      name: "test",
      date: "test",
      venue: "test",
      recommendations: ["test"],
    },
  ]);

  //fill result array
  React.useEffect(() => {
    result.map((yes) => {
      if (yes.recommendations !== null) {
        return {
          name: yes?.drinkName || "",
          date: yes?.date || "",
          venue: yes?.venue || "",
          reviews: yes?.recommendations._id || "",
        };
      } else {
        return {
          name: yes?.drinkName || "",
          date: yes?.date || "",
          venue: yes?.venue || "",
          reviews: [],
        };
      }
    });
  }, [result]);

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

  const [getSearch, { error, loading, data }] = useLazyQuery(GET_DRINK, {
    variables: search,
    fetchPolicy: "network-only", // Used for first execution
    nextFetchPolicy: "cache-first", // Used for subsequent executions
  });
  if (error) {
    console.log(error);
  }
  if (loading) return "loading...";
  const { drink } = data || {};
  console.log(drink);
  let resultPromise = new Promise((resolve, reject) => {
    if (drink) {
      resolve(drink);
    } else {
      reject(Error("Query failure"));
    }
  });
  resultPromise
    .then((result) => {
      setResult(result);
    })
    .catch((err) => {
      console.error(err);
    });

  const arr1 = [];
  arr1.push(drink);

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
        Browse Drinks
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
            elevation: 2,
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{ pl: "1rem" }}
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                getSearch({
                  variables: { drinkName: search.searchInput },
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
                label="Search Drinks"
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

            
          </Toolbar>
        </AppBar>
        <Box>
          <List>
            {result.map((loc, i) => (
              <div style={{ textDecoration: "none" }} key={i}>
                <Link
                  to={{
                    pathname: "/results",
                    state: loc, // your data array of objects}}
                  }}
                >
                  <ListItem button sx={{ textDecoration: "none" }}>
                    <ListItemText primary={loc.drinkName} secondary={loc.venue[0]} />
                  </ListItem>
                </Link>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Dialog>
    </div>
  );
}
