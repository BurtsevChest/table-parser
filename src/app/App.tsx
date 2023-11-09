import React, { useState } from "react";
import InputContainer from "../shared/ui/InputContainer";
import CodeViewer from "../shared/ui/CodeViewer";
import parseHtml from "../shared/parseHtml";
import sidebar from "../shared/config/sidebar";
import { useParseConfig } from "../entities/ParserConfig";

const App: React.FC = () => {
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

   return (
      <div className="main-container">
         <div className="site-container h-100">
            <div className="flex flex-column h-100 pb-100">
               <div>
                  <h1 className="mainHeaderTitle">Table Converter 1.1</h1>
               </div>
               <div className="flex-container flex-max pb-20">
                  <div className="flex-col flex-col-6 flex-col-xm-12">
                     <InputContainer
                        clearTemplate={onClearTemplate}
                     />
                  </div>
                  <div className="flex-col flex-col-6 flex-col-xm-12">
                  <CodeViewer
                     onChange={(data: string) => setTemplate(data)}
                     template={template}
                  />
                  </div>
               </div>
               <div className="flex flex-column a-items-center">
                  <div className="pb-16">
                     {
                        template ? 
                        <button onClick={copyToClipboard} className={`copyBtn ${isPasted && 'copyBtn-copied'} button`}> {isPasted ? 'Copied' : 'Copy'} </button>
                        : <button onClick={start}  className="button" > Start </button>
                     }
                  </div>
                  <div>   
                     <button onClick={openSettings}  className="button" > Settings </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default App;
