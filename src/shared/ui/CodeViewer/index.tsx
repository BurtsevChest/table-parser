import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { atomone } from "@uiw/codemirror-theme-atomone";
import './style.less'

interface ICodeViewerProps {
   template: string;
   onChange: (data: string) => void;
}

const CodeViewer: React.FC<ICodeViewerProps> = ({template, onChange}) => {
   return <div className="CodeViewer">
      <div className="CodeViewer-code">
         <ReactCodeMirror
            basicSetup = {{
               lineNumbers: false,
               foldGutter: false,
            }}
            theme={atomone}
            onChange={onChange}
            editable={true}
            value={template}
            height="558px"
            extensions={[html()]}
         />
      </div>
   </div>
}

export default React.memo(CodeViewer);
