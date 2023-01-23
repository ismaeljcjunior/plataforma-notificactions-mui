import { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { GreenBell } from '../../components/bells/GreenBell'
import { RedBell } from '../../components/bells/RedBell'
import { YellowBell } from '../../components/bells/YellowBell'
import { BlueBell } from '../../components/bells/BlueBell'
import Marquee from "react-fast-marquee";
import { MarqueeComp } from '../../components/marquee/Marque'


export const PageBells = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://devnewline.dyndns.org:3007/api_notifications`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      color: 'white',
      background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',
    }}>
      <Box >
        <Marquee speed={150}>
          <MarqueeComp />
        </Marquee>
        <Grid container spacing={3} justifyContent='center' >
          <Grid item xs={3} md={2.4} lg={2}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: "none", boxShadow: "none" }}>
              <GreenBell />
              <CardContent >
                <Typography textAlign='center' gutterBottom variant="h5" >
                  Nome sino
                </Typography>

              </CardContent>

            </Card>
          </Grid>
          <Grid item xs={3} md={2.4} lg={2}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: "none", boxShadow: "none" }}>
              <GreenBell />
              <CardContent >
                <Typography textAlign='center' gutterBottom variant="h5" component="div">
                  Nome sino
                </Typography>

              </CardContent>

            </Card>
          </Grid>
          <Grid item xs={3} md={2.4} lg={2}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: "none", boxShadow: "none" }}>
              <YellowBell />
              <CardContent >
                <Typography textAlign='center' gutterBottom variant="h5" component="div">
                  Nome sino
                </Typography>

              </CardContent>

            </Card>
          </Grid>
          <Grid item xs={3} md={2.4} lg={2}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: "none", boxShadow: "none" }}>
              <RedBell />
              <CardContent >
                <Typography textAlign='center' gutterBottom variant="h5" component="div" >
                  Nome sino
                </Typography>

              </CardContent>

            </Card>
          </Grid>
          <Grid item xs={3} md={2.4} lg={2}>
            <Card sx={{ maxWidth: 345, backgroundColor: 'transparent', border: "none", boxShadow: "none" }}>
              <BlueBell />
              <CardContent >
                <Typography textAlign='center' gutterBottom variant="h5" component="div">
                  Nome sino
                </Typography>

              </CardContent>

            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box >
  )
}

