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
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{backgroundColor: '#D9310B'}} position="static" >
        <Toolbar sx={{boxShadow: 10, mb: .2}}>
          <IconButton size="large" color="inherit">
            <Link to="/"> 
              <Badge> 
                <HomeTwoToneIcon style={{fill: "black"}}/>
              </Badge> 
            </Link>
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex'}}}>
           
            <IconButton size="large" color="inherit">
            <Link to="/login"> 
              <Badge sx={{backgroundColor: '#D9310B', fontFamily: 'Monteserrat', fontSize: ".6em"}}> 
                <LocalBarTwoToneIcon style={{fill: "black"}} /> login
              </Badge> 
              </Link>
            </IconButton>

            <IconButton size="large" color="inherit">
            <Link to="/signup"> 
              <Badge sx={{backgroundColor: '#D9310B', fontFamily: 'Monteserrat', fontSize: ".6em"}}>
                <PersonAddAltTwoToneIcon style={{fill: "black"}}/> signup
              </Badge>
              </Link>
            </IconButton>
      
            <IconButton size="large" color="inherit">
            <Link to="/profile"> 
              <Badge color="error" sx={{backgroundColor: '#D9310B', fontFamily: 'Monteserrat', fontSize: ".6em"}}>
                <LiquorTwoToneIcon style={{fill: "black"}}/> profile
              </Badge>
              </Link>
            </IconButton>
        
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}