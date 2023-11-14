import React from 'react';
import Accordion, { BaseItem } from '../../../shared/ui/Accordion';
import { TNewNodeAttrs } from '../../../shared/parseHtml';
import { prepareDataForAccordion } from '../lib/dataAdapter';
import TitleTemplate from './TitleTemplate';
import AddButton from '../../../shared/ui/AddButton';
import './styles.less';

export interface IItem {
   tagName: string;
   attrList: {
      attr: string;
      value: string;
   }[]
}

export interface INewAttrsListProps {
   attrList: TNewNodeAttrs | undefined;
}

/**
 * Компонент для изменения списка атрибутов для элементов бла бла бла бла
 * @param attrlist TNewNodeAttrs | undefined 
 * @returns 
 */
const NewAttrsList: React.FC<INewAttrsListProps> = ({ attrList }) => {
   const [list, setList] = React.useState<BaseItem[]>([]);

   React.useEffect(() => {
      setList(prepareDataForAccordion(attrList || {}));
   }, [attrList]);

   return (
      <div>
         <div className="flex a-items-center pb-16">
            <h2 className="">Новые атрибуты для элементов</h2>
            <AddButton
               width="20px"
               height="20px"
               className="ml-8"
            />
         </div>
         <Accordion
            TitleTemplate={TitleTemplate}
            items={list}
         />
      </div>
   );
}

export default NewAttrsList;
