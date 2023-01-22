import react from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

export const Layout = () => {

    return (
        <div>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent >
                            <Typography textAlign='center' gutterBottom variant="h5" component="div">
                                Nome sino
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent >
                            <Typography textAlign='center' gutterBottom variant="h5" component="div">
                                Nome sino
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent >
                            <Typography textAlign='center' gutterBottom variant="h5" component="div">
                                Nome sino
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent >
                            <Typography textAlign='center' gutterBottom variant="h5" component="div" >
                                Nome sino
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={3} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent >
                            <Typography textAlign='center' gutterBottom variant="h5" component="div">
                                Nome sino
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}