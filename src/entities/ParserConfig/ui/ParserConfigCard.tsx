import React from "react";
import { useParseConfig } from "../viewModel/useParseConfig";
import CloseButton from "../../../shared/ui/CloseButton";
import sidebar from "../../../shared/config/sidebar";
import './styles.less';

export interface IParserConfigCard {
   id: number;
}

const ParserConfigCard: React.FC<IParserConfigCard> = ({id}) => {
   const { config } = useParseConfig();

   const onCloseBtnClick = () => {
      sidebar.close(id);
   }

   // const updateConfig = (cfg: IParserConfigOptions) => {
   //    setConfig(cfg);
   // }

   // const globalUpdate = () => {
   //    updateGlobalConfig();
   // }

   return (
      <>
         <div className="flex flex-column h-100">
            <div className="ParserConfigCard-head flex flex-justify-between a-items-center pb-20">
               <h1>Настройки</h1>
               <CloseButton
                  onClick={onCloseBtnClick}
               />
            </div>
            <div className="ParserConfigCard-content flex-max pt-16">
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
            </div>
         </div>
      </>
   );
}

export default ParserConfigCard;
