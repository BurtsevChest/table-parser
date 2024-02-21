import React from "react";
import CloseButton from "../../../shared/ui/CloseButton";
import sidebar from "../../../shared/config/sidebar";
import { TagsForDelete } from "../../../features/TagsForDelete";
import { AttrsToSave } from "../../../features/AttrsToSave";
import './styles.less';

export interface IParserConfigCard {
   id: number;
}

/**
 * Виджет настроек конвертера
 */
const ParserConfigCard: React.FC<IParserConfigCard> = ({ id }) => {
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
               <div>
                  <AttrsToSave />
               </div>
               <div>
                  <TagsForDelete />
               </div>
            </div>
         </div>
      </>
   );
}

export default ParserConfigCard;
