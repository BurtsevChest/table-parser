import React from 'react';
import Accordion from '../../../shared/ui/Accordion';
import { prepareDataForAccordion } from '../lib/dataAdapter';
import TitleTemplate from './TitleTemplate';
import { useParseConfig } from '../../../entities/ParserConfig';
import './styles.less';

export interface IItem {
   tagName: string;
   attrList: {
      attr: string;
      value: string;
   }[]
}

/**
 * Компонент для изменения списка атрибутов для элементов
 * @param attrlist TNewNodeAttrs | undefined 
 * @returns 
 */
const NewAttrsList: React.FC = () => {
   const { newAttrs, updateNewAttrs } = useParseConfig();

   const onItemUpdate = () => {
      updateNewAttrs(
         {
            ...newAttrs,
         }
      )
   }

   const attrsForAccordion = prepareDataForAccordion(useParseConfig().newAttrs || {}, onItemUpdate);

   return (
      <div>
         <h2 className="pb-16">Новые атрибуты для элементов</h2>
         <Accordion
            TitleTemplate={TitleTemplate}
            items={attrsForAccordion}
         />
      </div>
   );
}

export default NewAttrsList;
