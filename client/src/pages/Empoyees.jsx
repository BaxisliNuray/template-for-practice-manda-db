import { Container } from '@mui/system'
import React from 'react'
import emp1 from '../downloads/emp1.png'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
function Empoyees() {
    return (
        <>
            <div style={{ marginTop: '10vh' }}>
                <Container>
                    <Box sx={{ width: '100%', flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item  xs={12} md={4} lg={3}>
                                <Card sx={{ maxWidth: 300 }}>
                            <div style={{margin:'0 auto'}}>
                                    <CardMedia
                                        sx={{ height: 230 }}
                                        image={emp1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        Julian Jameson
                                        </Typography>
                                        <Typography variant="p" >Profession</Typography>
                                    </CardContent>
                                    <CardActions>
                                   
                                    <Button style={{fontSize:'22px',width:'700',color:'#ff6551'}} color="inherit"><FacebookIcon/></Button>
                                    <Button style={{fontSize:'22px',width:'700',color:'#ff6551'}} color="inherit"><InstagramIcon/></Button>
                                    <Button style={{fontSize:'22px',width:'700',color:'#ff6551'}} color="inherit"><TwitterIcon/></Button>


                                    </CardActions>
                                    </div>
                                </Card>
                            </Grid>
                           </Grid>
                    </Box>

                </Container>
            </div>
        </>
    )
}

export default Empoyees