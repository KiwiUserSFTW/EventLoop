import {UnControlled as CodeMirror} from "react-codemirror2"
import Terminal from "../Terminal/CodemirrorTerminal";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/mode/javascript/javascript';
import "../../../UI/codeMirror.css";

function PatternsNode() {
    return(
            <>
                <Terminal />
            </>
            
        
    )
}

export default PatternsNode;