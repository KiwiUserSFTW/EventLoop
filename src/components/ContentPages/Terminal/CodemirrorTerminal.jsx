import { useState } from "react";
import {UnControlled as CodeMirror} from "react-codemirror2"
import { Button } from "@mui/material";
// codemirror styles && mode
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/mode/javascript/javascript';
import "../../../UI/codeMirror.css";

let result;
let START_CODE = 
`console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve("3").then((result) => {
    console.log(result);
  });
}, 1000);

console.log("4"); `



function Terminal(props) {
    let [code, setCode] = useState(START_CODE);
    let [output, setOutput] = useState("");

    function handleChange(editor, data, value) {
        setCode(value)

    }

    function handleRunScript() {
        let log;
        
        setOutput(output => output = " ")
        try{
            log = console.log;
            console.log = (e) => {
                setOutput(output => output + " " + e);
                // tempOutput += " " + e.toString();
               };
            // setOutput(output += " " + e);
            eval(code);
            
        }catch(e) {
           setOutput(e.toString());
           console.log(e + "Error")
        }
    }
    
    

    let options = {
        theme: "ayu-dark",
        lineNumbers:true,
        mode:"javascript",
        term:true,
        termWrap:false
    }
    
    return( 
        <>
            <div className="terminal">
                    <CodeMirror value={START_CODE} onChange={handleChange} options={options} />
                </div>
                <div>
                 output = 
                    {output}
                </div>
                <Button onClick={handleRunScript} sx = {{color: "black"}}> run script</Button>
        </>
    )
}


export default Terminal;