import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material"


export const MarqueeComp = () => {
    var [date, setDate] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        };
    });

    return (
        <Typography sx={{
            fontSize: {
                lg: 40,
                md: 30,
                sm: 25,
                xs: 15
            }
        }} textAlign='center' gutterBottom variant="h3" component="div">
            Plataforma de Notificações {date.toLocaleTimeString()}  {date.toLocaleDateString()}
        </Typography>
    )
}