import React, { useState } from "react";
import InputContainer from "../shared/ui/InputContainer";
import CodeViewer from "../shared/ui/CodeViewer";
import parseHtml from "../shared/parseHtml";
import sidebar from "../shared/config/sidebar";
import { useParseConfig } from "../entities/ParserConfig";

const App: React.FC<{}> = () => {
   const [template, setTemplate] = useState<string>('');
   const [isPasted, setIsPasted] = useState<boolean>(false);
   const {config} = useParseConfig();

   const start = () => {
      // Защита от дурака + предотвращаем кучу ошибок
      if(!template) {
         // setTemplate(parseTemplate('.InputContainer-content'));
         const element = document.querySelector('.InputContainer-content');

         if (element) {
            setTemplate(parseHtml(element, config));
         }
      }
   }

   const copyToClipboard = () => {
      navigator.clipboard.writeText(template).then(() => {
         setIsPasted(true);
         setTimeout(() => {
            setIsPasted(false);
         }, 1000);
      }, () => {
         setIsPasted(false);
      });
   }

   const openSettings = () => {
      sidebar.open({
         Component: () => import('../entities/ParserConfig/ui/ParserConfigCard'),
         name: 'configSettings',
         modal: true
      });
   }

   const onClearTemplate = () => {
      setTemplate('');
   }

   return <div className="main-container">
      <div className="center-container">
         <h1 className="mainHeaderTitle neon">Table Parser 1.0</h1>
      </div>
      <div className="widjet-container">
         <InputContainer
            clearTemplate={onClearTemplate}
         />
      </div>
      <div className="widjet-container">
         <CodeViewer
            onChange={(data: string) => setTemplate(data)}
            template={template}
         />
      </div>
      <div className="center-container start-btn">
         {
            template ? 
            <button onClick={copyToClipboard} className={`copyBtn ${isPasted && 'copyBtn-copied'} button`}> {isPasted ? 'Copied' : 'Copy'} </button>
            : <button onClick={start}  className="button" > Start </button>
         }
      </div>
      <div className="center-container start-btn">   
         <button onClick={openSettings}  className="button" > Settings </button>
      </div>
   </div>
}

export default App;
