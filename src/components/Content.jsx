import Controller from "./ContentPages/Controller";
import {createContext, useState} from "react";
import ChromePage from "./ContentPages/ChromePage/ChromeContent";
import NodePattern from "./ContentPages/NodePage/NodeContent";
import { Grid } from "@mui/material";

const ContextContentId = createContext();
const pages = [<ChromePage />, <NodePattern />];

function Content() {
    let [contentId, setContentId] = useState(0);

    return (
        <>
            <ContextContentId.Provider value = {contentId}> 
                <Controller handleChange = {(e) => {setContentId(e.target.id)}} contentId = {contentId} context = {ContextContentId}/>
                <Grid sx={{display: "grid"}}>
                    {pages[contentId]}
                </Grid>
            </ContextContentId.Provider>
        </>
    )
}

export default Content;