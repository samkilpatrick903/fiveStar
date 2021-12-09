import { ADD_DRINK } from "../utils/mutations";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useMutation } from "@apollo/client";


export function AddButton() {
  const [formState, setFormState] = useState({
    drinkName: "",
    venue: "",
  });

  const [addDrink, { error }] = useMutation(ADD_DRINK, {
    variables: formState,
  });
  if (error) {
    console.log(error);
  } else {
    // return alert('drink added')
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addDrink({
        variables: { ...formState },
      });
      console.log(data)
      setFormState({
        drinkName: "",
        venue: "",
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div>
      <Box sx={{ pl: "1rem" }} component="form" onSubmit={handleFormSubmit}>
        <TextField
          variant="outlined"
          endAdornment
          sx={{ disableUnderline: true }}
          margin="normal"
          required
          fullWidth
          name="drinkName"
          label="Drink Name"
          type="searchInput"
          id="drinkName"
          autoComplete="search"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          endAdornment
          sx={{ disableUnderline: true }}
          margin="normal"
          required
          fullWidth
          name="venue"
          label="Venue Name"
          type="Input"
          id="venue"
          autoComplete="input"
          onChange={handleChange}
        />

        <Button className="btn btn-primary btn-block py-3" type="submit"
        onClick=
          {() => {
            alert("Your favorite has been added!");
          }}>
          Add Favorite!
        </Button>
      </Box>

      <div className="col-12 col-lg-3"></div>
      {error && (
        <div className="col-12 my-3 bg-danger text-white p-3">
          Something went wrong...
        </div>
      )}
    </div>
  );
}