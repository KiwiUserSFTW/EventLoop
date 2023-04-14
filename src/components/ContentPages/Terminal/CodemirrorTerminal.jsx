import { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2"
import { Button, Grid } from "@mui/material";

// codemirror styles && mode
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/mode/javascript/javascript';
import "../../../UI/codeMirror.css";
import { START_CODE } from "./StartCode";

function Terminal(props) {
    let [code, setCode] = useState(START_CODE);
    let [output, setOutput] = useState("");

    function handleChange(editor, data, value) {
        setCode(value)
    }

    function handleRunScript() {
        setOutput(output => output = " ")
        try{
            // let log = console.log;
            console.log = (e) => {
                setOutput(output => output + " " + e);
               };
         
                eval(code);
            
        }catch(e) {
           setOutput(e.toString());
        }
    } // finally {console.log = log}
    
    

    let options = {
        theme: "ayu-dark",
        lineNumbers:true,
        mode:"javascript",
        term:true,
        termWrap:false
    }
    
    return( 
        <>
            <Grid className="terminal">
                <CodeMirror value={START_CODE} onChange={handleChange} options={options} />
            </Grid>
            <Grid className="output">
                output = {output} 
            </Grid>
                <Button onClick={handleRunScript} sx = {{color: "black"}}> run script</Button>
        </>
    )
}


export default Terminal;