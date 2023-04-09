import {UnControlled as CodeMirror} from "react-codemirror2"

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/mode/javascript/javascript';
import "../../../UI/codeMirror.css";
import { useState } from "react";
import { Button } from "@mui/material";

let START_CODE = 
`console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve("3").then((result) => {
    console.log(result);
  });
}, 1000);

console.log("4"); `

function PatternsNode() {
    let [code, setCode] = useState(START_CODE);
    
    function handleChange(e) {
        setCode(e.getValue())
    }
    
    function handleRunScript() {

        try{
            eval(code);
        
        }catch(error) {
            console.log(Error + error);
        }
    }

    let options = {
        theme: "ayu-dark",
        lineNumbers:true,
        mode:"javascript",
    }
    return(
            <>
            
                <div className="terminal">
                    <CodeMirror value = {code} onChange={handleChange} options={options} />
                </div>
                
                <Button onClick={handleRunScript} sx = {{color: "black"}}> run script</Button>
            </>
            
        
    )
}

export default PatternsNode;