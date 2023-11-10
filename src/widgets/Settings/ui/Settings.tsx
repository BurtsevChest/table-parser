import React from "react";
import { useParseConfig } from "../../../entities/ParserConfig";
import CloseButton from "../../../shared/ui/CloseButton";
import sidebar from "../../../shared/config/sidebar";
import { NewAttrsList } from "../../../features/NewAttrList";
import './styles.less';

export interface IParserConfigCard {
   id: number;
}

/**
 * Виджет настроек конвертера
 */
const ParserConfigCard: React.FC<IParserConfigCard> = ({id}) => {
   const { config } = useParseConfig();

   const onCloseBtnClick = () => {
      sidebar.close(id);
   }

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
               <h2 className="pb-16">Новые атрибуты для элементов</h2>
               <NewAttrsList
                  attrList={config.newAttrs}
               />
            </div>
         </div>
      </>
   );
}

export default ParserConfigCard;
