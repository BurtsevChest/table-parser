import React, { useState } from "react";
import InputContainer from "../shared/ui/InputContainer";
import CodeViewer from "../shared/ui/CodeViewer";
import parseTemplate from "../shared/utils/parseTemplate";

const App: React.FC<{}> = () => {
   const [template, setTemplate] = useState<string>('');

   const cleartables = () => {
      // Защита от дурака + предотвращаем кучу ошибок
      if(!template) {
         setTemplate(parseTemplate('.InputContainer-content'));
      }
   }

   const onClearTemplate = () => {
      setTemplate('');
   }

   return <div className="main-container">
      <div className="center-container">
         <h1 className="neon">Table Parser 1.0</h1>
      </div>
      <div className="widjet-container">
         <InputContainer clearTemplate={onClearTemplate} />
      </div>
      <div className="widjet-container">
         <CodeViewer template={template}/>
      </div>
      <div className="center-container start-btn">
         <button onClick={cleartables} className="button">Start</button>
      </div>
   </div>
}

export default App;
