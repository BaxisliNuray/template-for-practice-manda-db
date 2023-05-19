import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{backgroundColor:'#2435a1'}} >
                    <Container maxWidth="lg">
                    <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
                            
                            <div>
                              <Button style={{fontSize:'22px',width:'700'}} color="inherit">Brandname</Button>
                                <div style={{marginLeft:'25px',display:'inline'}}>
                                <Button style={{fontSize:'12px',width:'700'}} color="inherit">Home</Button>
                                <Button style={{fontSize:'12px',width:'700'}} color="inherit">Product</Button>
                                <Button style={{fontSize:'12px',width:'700'}} color="inherit">Pricing</Button>
                                <Button style={{fontSize:'12px',width:'700'}} color="inherit">Contact</Button>
                                </div>
                            </div>
                            <div>
                                <Button color="inherit">Login</Button>
                                <Button style={{ background: '#ff6551', color: 'white',padding:'9px 20px' }}>JOIN US <ArrowForwardIcon /></Button>

                            </div>

                        </Toolbar>


                    </Container>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar