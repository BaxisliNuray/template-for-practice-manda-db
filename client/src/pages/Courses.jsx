import React from 'react'
import courses from "./courses.module.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DownloadIcon from '@mui/icons-material/Download';
import img1 from '../downloads/img1.png'
import img2 from '../downloads/img2.png'
import img3 from '../downloads/img3.png'
import img4 from '../downloads/img4.png'


function Courses() {
    return (
        <>
            <div style={{ paddingTop: '13vh' }}>
                <Container>
                    <Typography style={{ color: '#FF6551', fontSize: '14px', fontWeight: '700' }}>Courses</Typography>
                    <Typography style={{ fontWeight: '700', color: '#252B42', fontSize: '40px' }}>Video in Live Action</Typography>
                    <Typography className={courses.paragraph}>Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics </Typography>
                    <div style={{ marginTop: '10vh' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={3}>
                                    <Card sx={{ maxWidth: 300 }}>
                                        <CardMedia sx={{ height: 350 }} image={img1}>
                                        </CardMedia>
                                        <CardContent style={{ marginLeft: '15px' }}>
                                            <Typography style={{ color: '#252B42',fontSize:'16px',fontWeight:'700' }}>
                                                Watch our Courses
                                            </Typography>
                                            <Typography style={{ color: '#737373' }}>
                                                We focus on ergonomics <br />
                                                and meeting you....
                                            </Typography>
                                            <Typography style={{ display: 'flex', alignItems: 'center',marginTop:'10px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', fontSize: '12px' }}><DownloadIcon /></span>
                                                <span style={{ color: '#737373', fontWeight: '700', marginLeft: '15px' }}>18 Sales</span>
                                            </Typography>
                                            <Typography style={{marginTop:'15px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', }}>$16.48</span>
                                                <span style={{ color: '#2435A1', fontWeight: '700', marginLeft: '15px' }}>$6.48</span>
                                            </Typography>

                                            <CardActions>
                                                <Button style={{ color: '#ff6551', borderRadius: '30px', border: '1px solid ff6551', padding: '10px 15px' }} size="small">Learn More <ArrowForwardIosIcon style={{ fontSize: '13px' }} /></Button>
                                            </CardActions>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card sx={{ maxWidth: 300 }}>
                                        <CardMedia
                                            sx={{ height: 350 }}
                                            image={img2}
                                        />
                                          <CardContent style={{ marginLeft: '15px' }}>
                                            <Typography style={{ color: '#252B42',fontSize:'16px',fontWeight:'700' }}>
                                                Watch our Courses
                                            </Typography>
                                            <Typography style={{ color: '#737373' }}>
                                                We focus on ergonomics <br />
                                                and meeting you....
                                            </Typography>
                                            <Typography style={{ display: 'flex', alignItems: 'center',marginTop:'10px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', fontSize: '12px' }}><DownloadIcon /></span>
                                                <span style={{ color: '#737373', fontWeight: '700', marginLeft: '15px' }}>18 Sales</span>
                                            </Typography>
                                            <Typography style={{marginTop:'15px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', }}>$16.48</span>
                                                <span style={{ color: '#2435A1', fontWeight: '700', marginLeft: '15px' }}>$6.48</span>
                                            </Typography>

                                            <CardActions>
                                                <Button style={{ color: '#ff6551', borderRadius: '30px', border: '1px solid ff6551', padding: '10px 15px' }} size="small">Learn More <ArrowForwardIosIcon style={{ fontSize: '13px' }} /></Button>
                                            </CardActions>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card sx={{ maxWidth: 300 }}>
                                        <CardMedia
                                            sx={{ height: 350 }}
                                            image={img3}
                                        />
                                        <CardContent style={{ marginLeft: '15px' }}>
                                            <Typography style={{ color: '#252B42',fontSize:'16px',fontWeight:'700' }}>
                                                Watch our Courses
                                            </Typography>
                                            <Typography style={{ color: '#737373' }}>
                                                We focus on ergonomics <br />
                                                and meeting you....
                                            </Typography>
                                            <Typography style={{ display: 'flex', alignItems: 'center',marginTop:'10px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', fontSize: '12px' }}><DownloadIcon /></span>
                                                <span style={{ color: '#737373', fontWeight: '700', marginLeft: '15px' }}>18 Sales</span>
                                            </Typography>
                                            <Typography style={{marginTop:'15px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', }}>$16.48</span>
                                                <span style={{ color: '#2435A1', fontWeight: '700', marginLeft: '15px' }}>$6.48</span>
                                            </Typography>

                                            <CardActions>
                                                <Button style={{ color: '#ff6551', borderRadius: '30px', border: '1px solid ff6551', padding: '10px 15px' }} size="small">Learn More <ArrowForwardIosIcon style={{ fontSize: '13px' }} /></Button>
                                            </CardActions>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card sx={{ maxWidth: 300 }}>
                                        <CardMedia
                                            sx={{ height: 350 }}
                                            image={img4}
                                        />
                                        <CardContent style={{ marginLeft: '15px' }}>
                                            <Typography style={{ color: '#252B42',fontSize:'16px',fontWeight:'700' }}>
                                                Watch our Courses
                                            </Typography>
                                            <Typography style={{ color: '#737373' }}>
                                                We focus on ergonomics <br />
                                                and meeting you....
                                            </Typography>
                                            <Typography style={{ display: 'flex', alignItems: 'center',marginTop:'10px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', fontSize: '12px' }}><DownloadIcon /></span>
                                                <span style={{ color: '#737373', fontWeight: '700', marginLeft: '15px' }}>18 Sales</span>
                                            </Typography>
                                            <Typography style={{marginTop:'15px'}}>
                                                <span style={{ color: 'lightgray', fontWeight: '700', }}>$16.48</span>
                                                <span style={{ color: '#2435A1', fontWeight: '700', marginLeft: '15px' }}>$6.48</span>
                                            </Typography>

                                            <CardActions>
                                                <Button style={{ color: '#ff6551', borderRadius: '30px', border: '1px solid ff6551', padding: '10px 15px' }} size="small">Learn More <ArrowForwardIosIcon style={{ fontSize: '13px' }} /></Button>
                                            </CardActions>

                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Courses