import React, {useState} from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import './style.less'

interface ICodeViewerProps {
   template: string;
}

const CodeViewer: React.FC<ICodeViewerProps> = ({template}) => {
   const [isPasted, setIsPasted] = useState<boolean>(false);

   const copyToClipboard = () => {
      navigator.clipboard.writeText(template).then(() => {
         setIsPasted(true);
         setTimeout(() => {
            setIsPasted(false);
         }, 1000);
      }, () => {
         setIsPasted(false);
      })
   }

   return <div className="CodeViewer">
      <button onClick={copyToClipboard} className={`CodeViewer-copyBtn ${isPasted && 'CodeViewer-copyBtn-copied'} button`}>
         {isPasted ? 'Copied' : 'Copy'}
      </button>
      <div className="CodeViewer-code">
         <ReactCodeMirror
            basicSetup = {{
               lineNumbers: false,
               foldGutter: false
            }}
            theme={'light'}
            editable={false}
            value={template}
            height="558px"
            extensions={[html()]}
         />
      </div>
   </div>
}

export default React.memo(CodeViewer);
