import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import LocalBarTwoToneIcon from '@mui/icons-material/LocalBarTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import LiquorTwoToneIcon from '@mui/icons-material/LiquorTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';


export default function Nav () {
  return (
      <AppBar sx={{color: 'white', backgroundColor: '#D9310B'}} position="static" >
        <Toolbar>
          <IconButton size="large">
            <Link to="/"> 
              <Badge> 
                <HomeTwoToneIcon style={{fill: "white"}}/>
              </Badge> 
            </Link>
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex'}}}>
           
            <IconButton size="large">
            <Link to="/login"> 
              <Badge sx={{font: 'Monteserrat', fontSize: ".6em",}}>
                <LocalBarTwoToneIcon  sx={{mr:.5}} style={{fill: "white"}} /> 
                Login
                </Badge> 
              </Link>
            </IconButton>

            <IconButton size="large" color="inherit">
            <Link to="/signup" underline="none">
              <Badge sx={{fontStyle: 'Monteserrat', fontSize: ".6em", underline: 'none'}}>
                <PersonAddAltTwoToneIcon sx={{mr:.5}} style={{fill: "white"}}/>
                Signup
              </Badge>
              </Link>
            </IconButton>
      
            <IconButton size="large" color="inherit">
            <Link to="/profile"> 
              <Badge color="error" sx={{font: 'Monteserrat', fontSize: ".6em", color: "FFFFFF"}}>
                <LiquorTwoToneIcon sx={{mr:.5}} style={{fill: "white"}}/> 
                Profile
              </Badge>
              </Link>
            </IconButton>
      
    </Box>
        </Toolbar>
      </AppBar>
  );
}