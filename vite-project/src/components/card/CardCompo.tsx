import React, { useState, useEffect } from 'react'
import { Box, Button, Card, DialogActions, CardContent, CardMedia, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography, CardActionArea, Tooltip, TextField, InputLabel, Select, SelectChangeEvent, MenuItem, useMediaQuery, DialogProps, Link } from '@mui/material'
import { GreenBell } from '../../components/bells/GreenBell'
import { RedBell } from '../../components/bells/RedBell'
import { YellowBell } from '../../components/bells/YellowBell'
import { BlueBell } from '../../components/bells/BlueBell'

interface ICardCompoProps {
    id_consulta?: number;
    nome?: string
    amarelo_inicio?: number
    amarelo_final?: number
    resultado_consulta_ext?: string
    reenvio_agendado?: number
    descricao?: string
    status_cor?: string
    link_externo?: string
    onClick?: () => void
    cor_card?: string
}

export const CardCompo: React.FC<ICardCompoProps> = ({ nome, cor_card, id_consulta, amarelo_final, amarelo_inicio, reenvio_agendado, resultado_consulta_ext,
    link_externo, descricao, status_cor
}) => {

    const [open, setOpen] = useState(false)
    const [age, setAge] = React.useState('')
    const [responsible, setResponsible] = React.useState('')
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
        console.log('handleClick', open)
    };
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (

        <Box  >
            <Card onClick={() => handleClickOpen()} sx={{ maxWidth: 200, backgroundColor: 'transparent', border: "none", boxShadow: "none" }} >

                <Box>
                    {status_cor === 'verde' && (
                        <GreenBell />
                    )}
                    {status_cor === 'vermelho' && (
                        <RedBell />
                    )}
                    {status_cor === 'azul' && (
                        <BlueBell />
                    )}
                    {status_cor === 'amarelo' && (
                        <YellowBell />
                    )}
                </Box>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                >
                    <DialogTitle id="alert-dialog-title">
                        <Typography sx={{
                            fontSize: {
                                lg: 30,
                                md: 20,
                                sm: 15,
                                xs: 10
                            }
                        }} textAlign='center' gutterBottom variant="h5" >
                            {nome}
                        </Typography>
                    </DialogTitle>
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <DialogContentText id="alert-dialog-description" >

                            <Box width='100%' display='flex'>
                                <Grid display='flex' flexDirection='column' gap={3} sx={{ padding: 4, width: 1 }} >
                                    <InputLabel >Tornar Responsável</InputLabel>
                                    <Select
                                        value={responsible}
                                        label="responsible"
                                        onChange={handleChange}
                                    >
                                        <MenuItem >Responsavel</MenuItem>


                                    </Select>
                                    <Select
                                        value={age}
                                        label="sadas"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={24}>24 horas</MenuItem>
                                        <MenuItem value={48}>48 horas</MenuItem>

                                    </Select>
                                    <TextField variant='outlined' label="Valor Inicio" value={amarelo_inicio} inputProps={{ readOnly: true, }} />
                                    <TextField variant='outlined' label="Valor Final" value={amarelo_final} inputProps={{ readOnly: true, }} />
                                    <TextField variant='outlined' label="Resultado Consulta" value={resultado_consulta_ext} inputProps={{ readOnly: true, }} />
                                    <TextField variant='outlined' label="Renvio Agendado" value={reenvio_agendado} inputProps={{ readOnly: true, }} />
                                    <Link component={Button} href={link_externo} target="_blank" >Link BI</Link>

                                </Grid>
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {/* //<Button variant='contained' onClick={() => handleClose}>Fechar</Button> */}
                        Presione ESC para fechar
                    </DialogActions>
                </Dialog>

                <CardContent sx={{ marginTop: -5, Height: 55 }} >
                    <Typography sx={{
                        fontWeight: 'bold', overflow: "hidden", textOverflow: "ellipsis",
                        fontSize: {
                            lg: 20,
                            md: 20,
                            sm: 15,
                            xs: 10
                        }
                    }} textAlign='center' gutterBottom variant="h5" >
                        {nome}
                    </Typography>
                </CardContent>

            </Card>
        </Box>
    )
}

