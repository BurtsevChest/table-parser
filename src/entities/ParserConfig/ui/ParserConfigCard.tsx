import React from "react";
import { useParseConfig } from "../viewModel/useParseConfig";
import { IParserConfigOptions } from "../../../shared/parseHtml";

export interface IParserConfigCard {
   onUpdate: () => void;
}

const ParserConfigCard: React.FC = () => {
   const { config, setConfig, updateGlobalConfig } = useParseConfig();

   const updateConfig = (cfg: IParserConfigOptions) => {
      setConfig(cfg);
   }

   const globalUpdate = () => {
      updateGlobalConfig();
   }

   return (
      <>
         <h1>Настройки</h1>
         <h2>Атрибуты, которые нужно сохранить</h2>
         <ul>
            {config.attributesToSave && config.attributesToSave.map((attribute, id) => (
               <li key={id}>{attribute}</li>
            ))}
         </ul>
         <h2>Новые атрибуты для тегов</h2>
         <ul>
            {config.newAttrs && Object.entries(config.newAttrs).map(([tagName, attrList], id) => (
               <li style={{ paddingBottom: '8px' }} key={id}>
                  <b>{tagName}</b><br />
                  <ul>
                     {Object.keys(attrList).map((attrName, id) => (
                        <li style={{ paddingBottom: '8px' }} key={id}>
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
         <h2>Теги, которые нужно удалить</h2>
         <ul>
            {config.tagsForDelete && config.tagsForDelete.map((tagName, id) => (
               <li key={id}>{tagName}</li>
            ))}
         </ul>
      </>
   );
}

export default ParserConfigCard;
