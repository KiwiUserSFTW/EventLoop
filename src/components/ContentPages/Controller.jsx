import {  Button, Grid } from "@mui/material";
import { useContext } from "react";

let context;
let color;

function Controller(props) {
context = props.context;
    return (
                <ControllButtons handleChange = {props.handleChange} contentId = {props.contentId} />     
    )
}

function ControllButtons(props) {
    const them = useContext(context)
    function changeColor(id) {
        color = props.contentId != id ? "white" : "#DD1B1B";
        return color
    }

    return (
       <Grid sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                background:"linear-gradient(90deg, rgba(229,120,120,1) 0%, rgba(0,0,0,1) 0%, rgba(164,0,0,1) 100%)",
                marginTop: "10px",
                borderRadius: "10px",
                border: "1px solid black"
            }}>
                    <Button variant="text" id = "0" onClick={props.handleChange} 
                        sx = {{
                            
                            padding: "3%", color: `${changeColor(0)}`, transition: "1s"
                        }}> Native Javascript </Button>
                    <Button variant="text" id = "1" onClick={props.handleChange} sx = {{padding: "3%", color: `${changeColor(1)}`}}> Node.js </Button>  
        </Grid> 
    )
}
export default Controller;