import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Image from '../assets/beer.jpg'; 
import Image from '../assets/marg.jpg'


// const cards = [1, 2, 3];
const theme = createTheme();

const cards = [
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function BarModal(open, handleClose) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
export default function Profile() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}



                <Box
                    sx={{
                        // backgroundImage: `url(${Image})`, 
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">

                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            FiveStar Drinks
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Profile
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Search Drinks</Button>
                            <Button variant="contained">Browse Favorites</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ backgroundImage: `url(${Image})`, py: 8 }} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.location_name} xs={12} sm={6} md={4}>
                                <Card sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.location_name}
                                        </Typography>

                                        {card.drink_names.map((drink, index) => (<Typography key={index}>{drink}</Typography>))}

                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={handleOpen} size="small">View</Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                        <div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Address:
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}