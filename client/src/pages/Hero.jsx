import React from 'react'
import { Container } from '@mui/system'
import hero from "../downloads/hero.png"
import { Button, Typography } from '@mui/material'


function Hero() {
    return (
        <>
            <div style={{width:'100%'}} >
            <div style={{ width: "100%", height: "70rem", backgroundImage: `url(${hero})`,backgroundRepeat:'no-repeat', backgroundPosition:"center", backgroundSize: "cover"}}>
                <Container >
                    <div style={{paddingTop:'17rem'}}>
                    <Typography style={{textAlign:'center',color:'#FF6551',fontWeight:'700',fontSize:'16px',marginBottom:'30px'}}>For Better Future</Typography>
                    <Typography style={{textAlign:'center',fontWeight:'700',fontSize:'58px ',color:'white'}}>25K+ STUDENTS <br />
                    TRUST US</Typography>
                    <Typography style={{textAlign:'center',fontWeight:'400',fontSize:'20px ',color:'white'}}>Find the right instructor for you from over 10,000 <br /> teachers</Typography>
                    <div style={{marginTop:'4rem',display:'flex',justifyContent:'center'}}>
                    <Button style={{ background: '#ff6551',fontWeight:'700', color: 'white',padding:'12px 45px',marginRight:'10px' }}>Get Quote Now </Button>
                    <Button style={{ border:'1px dotted #ff6551',fontWeight:'700', color: '#ff6551',padding:'12px 45px',marginLeft:'10px' }}>Learn More </Button>
                    </div>

                    </div>




                </Container>
            </div>
            </div>
        </>
    )
}

export default Hero