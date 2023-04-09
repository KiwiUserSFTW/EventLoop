import Controller from "./Controller";
import {createContext, useState} from "react";
import ELPatterns from "./PatternsChromeEL/ELPatterns";
import ELPNodePatterns from "./ELPNodePatterns/ELPNodePatterns";
import { Grid } from "@mui/material";
const ContextContentId = createContext();

let pages = [<ELPatterns />, <ELPNodePatterns />];
    function Content() {
    let [contentId, setContentId] = useState(0);

    function contentIdChanger(e) {
        setContentId(e.target.id);
    } 

    function choosePages(id) {
        let result;
        if(pages[id].isReadOnly == undefined) {
        return  pages[id]
        }
        
    }

    return (
        <>            
            
            <ContextContentId.Provider value = {contentId}> 
                <Controller handleChange = {contentIdChanger} contentId = {contentId} context = {ContextContentId}/>
                <Grid sx={{display: "grid"}}>
                    {choosePages(contentId)}
                </Grid>
                
            </ContextContentId.Provider>
        </>
    )
}

export default Content;