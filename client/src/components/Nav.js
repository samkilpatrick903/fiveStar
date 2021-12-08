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
              <Badge sx={{fontFamily: 'Monteserrat', fontSize: ".6em",}}>
                <LocalBarTwoToneIcon  sx={{mr:.5}} style={{fill: "white"}} /> 
                login
                </Badge> 
              </Link>
            </IconButton>

            <IconButton size="large" color="inherit">
            <Link to="/signup" underline="none">
              <Badge sx={{fontFamily: 'Monteserrat', fontSize: ".6em", underline: 'none'}}>
                <PersonAddAltTwoToneIcon sx={{mr:.5}} style={{fill: "white"}}/>
                signup
              </Badge>
              </Link>
            </IconButton>
      
            <IconButton size="large" color="inherit">
            <Link to="/profile"> 
              <Badge color="error" sx={{fontFamily: 'Monteserrat', fontSize: ".6em"}}>
                <LiquorTwoToneIcon sx={{mr:.5}} style={{fill: "white"}}/> 
                profile
              </Badge>
              </Link>
            </IconButton>
      
    </Box>
        </Toolbar>
      </AppBar>
  );
}