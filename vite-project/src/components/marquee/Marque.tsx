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
        <Typography textAlign='center' gutterBottom variant="h3" component="div">
            PLATAFORMA DE NOTIFICAMENTO {date.toLocaleTimeString()}  {date.toLocaleDateString()}

        </Typography>
    )
}