import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Grid } from '@mui/material'
import Marquee from "react-fast-marquee";
import { MarqueeComp } from '../../components/marquee/Marque'
import { CardCompo } from '../../components/card/CardCompo'


interface ICardCompoProps {
  ID_CONSULTA?: number | undefined;
  NOME?: string | undefined
  AMARELO_INICIO?: number
  AMARELO_FINAL?: number
  RESULTADO_CONSULTA_EXT?: string
  REENVIO_AGENDADO?: number
  DESCRICAO?: string
  STATUS_COR?: string
  LINK_EXTERNO?: string
  onClick?: () => void
  testi?: boolean

}

export const PageBells: React.FC = () => {
  const [data, setData] = useState<ICardCompoProps[]>([])

  useEffect(() => {
    axios.get(`http://10.50.2.126:3007/api_notifications`)
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      })
    setInterval(() => {
      axios.get(`http://10.50.2.126:3007/api_notifications`)
        .then((res) => {
          setData(res.data.results);
          console.log(res.data.results);
        })
        .catch((err) => {
          console.error(err);
        })
    }, 5000)
  }, [])


  return (
    <Box sx={{
      alignItems: 'center',
      color: 'white',
      background: 'linear-gradient(to right bottom, #36EAEF, #6B0AC9)',
      display: 'flex',
      width: '100vw',
      height: '100vh',
    }}>
      <Box sx={{
        margin: 2
      }}>
        <Marquee speed={150} gradient={false} >
          <MarqueeComp />
        </Marquee>

        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={1}>

            {data.map(data => (

              <Grid container item spacing={3} xs={3} md={2.4} lg={2}>
                <CardCompo
                  nome={data.NOME}
                  key={data.ID_CONSULTA}
                  descricao={data.DESCRICAO}
                  amarelo_final={data.AMARELO_INICIO}
                  amarelo_inicio={data.AMARELO_FINAL}
                  resultado_consulta_ext={data.RESULTADO_CONSULTA_EXT}
                  link_externo={data.LINK_EXTERNO}
                  reenvio_agendado={data.REENVIO_AGENDADO}
                  status_cor={data.STATUS_COR}
                />
              </Grid>
            ))}

          </Grid>
        </Box>
      </Box >
    </Box>
  )
}