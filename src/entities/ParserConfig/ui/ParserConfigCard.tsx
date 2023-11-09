import React from "react";
import { useParseConfig } from "../viewModel/useParseConfig";

export interface IParserConfigCard {
   onUpdate: () => void;
}

const ParserConfigCard: React.FC = () => {
   const { config } = useParseConfig();

   // const updateConfig = (cfg: IParserConfigOptions) => {
   //    setConfig(cfg);
   // }

   // const globalUpdate = () => {
   //    updateGlobalConfig();
   // }

   return (
      <>
         <h1 className="pb-20 pb-xm-12 pb-sm-8">Настройки</h1>
         <h2 className="pb-16">Атрибуты, которые нужно сохранить</h2>
         <ul className="pb-16">
            {config.attributesToSave && config.attributesToSave.map((attribute, id) => (
               <li className="pb-8" key={id}>{attribute}</li>
            ))}
         </ul>
         <h2 className="pb-16">Новые атрибуты для тегов</h2>
         <ul className="pb-16">
            {config.newAttrs && Object.entries(config.newAttrs).map(([tagName, attrList], id) => (
               <li className="pb-8" key={id}>
                  <p className="pb-4"><b>{tagName}</b></p><br />
                  <ul className="pb-16">
                     {Object.keys(attrList).map((attrName, id) => (
                        <li className="pb-8" key={id}>
                           {attrName}: '{
                              //@ts-ignore
                              attrList[attrName]
                           }'
                        </li>
                     ))}
                  </ul>
               </li>
            ))}
         </ul>
         <h2 className="pb-16">Теги, которые нужно удалить</h2>
         <ul className="pb-16">
            {config.tagsForDelete && config.tagsForDelete.map((tagName, id) => (
               <li className="pb-8" key={id}>{tagName}</li>
            ))}
         </ul>
      </>
   );
}

export default ParserConfigCard;
