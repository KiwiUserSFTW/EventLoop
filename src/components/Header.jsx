import React from "react";
import {Grid, Typography} from "@mui/material";


function Header() {

    return (
        <>
            <Content />
        </>
    )
}

function Content() {

    return (
        <>
        <Grid sx ={{
                        userSelect:"none",
                        background: "linear-gradient(90deg, rgba(229,120,120,1) 0%, rgba(0,0,0,1) 0%, rgba(164,0,0,1) 100%)",
                        color: "red", 
                        border:"1px solid black",
                        borderRadius: "10px",
                        padding: "5px"
                        
                    }}>
        <Typography variant="h5" align = "center" sx ={{
                        background: "linear-gradient(to right, #D90000 30%, #FFFFFF 80%)",
                        position: "relative", 
                        padding: "5px",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      
                        
                    }}>

            In this blog you can see Event Loop on Examples
        </Typography>   
        </Grid>
        
        
        </>
    )
}

export default Header;