import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';

export const Below=()=>{
    const state= [
    
    {
        location_name: "Lala's Little Nugget",
        address: "2207 Justin Ln, Austin, TX 78757",
        up_votes: "5",
        drink_names: 
        [
            "Naughty Nugget", "Buddy's Elf Fashioned", "Lump of Cole"
        ]
    },
    {
        location_name: "Wonder Bar",
        address: "11500 Rock Rose Ave suite d, Austin, TX 78758",
        up_votes: "5",
        drink_names: 
        [
            "Wonder Water", "Austin Jackass", "Livin’ My Best Life"
        ]
    }
]
    return(
        <Grid
        flexDirection='column'
        
         container>
            {state.map((loc)=>(
            <Grid key={loc.location_name} 
            item
            //position="initial"
            >
            <div className="col-sm-12 justify-content-center">
    <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{loc.location_name}</h5>
                    <p className="card-text">{loc.address}</p>
                </div>
            </div>
            <div className="col-md-4">
                {/* <img 
                
                className = "card-img" src="https://i.imgur.com/DkjnUMh.jpg" alt="keto"/> */}
            </div>
        </div>
    </div>
    </div>
            </Grid>
            ))}
        </Grid>
    )
}