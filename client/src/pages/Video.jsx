import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import video from "./video.module.css"
import { Typography } from '@mui/material';


function Video() {
    return (
        <>
            <Container>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <img width='90%' src="https://img.freepik.com/premium-photo/colored-pencils-yellow-background-copy-space_771335-5800.jpg?w=360" alt='sekil' />
                        </Grid>
                        <Grid item xs={6}>
                            <div className={video.line}></div>
                            <div style={{ marginTop: '4vh' }}>
                                <Typography className={video.text}>Video in Live <br /> Action</Typography>
                                

                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Video