import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Grid     } from '@mui/material/'


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
        <Container>
            <Grid container>

            </Grid>
        </Container>
    )
}