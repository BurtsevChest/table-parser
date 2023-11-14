import React from 'react';
import './styles.less';

export interface BaseItem {
   title: string;
   ItemTemplate: React.ReactNode | JSX.Element[];
}

export interface IAccordionProps {
   items: BaseItem[];
   TitleTemplate: React.FC<{ title: string; active: boolean; }>;
   onItemClick?: (index: number) => void;
}

/**
 * Базовый компонент для создания Аккордеона
 * @param param0 
 * @returns 
 */
const Accordion: React.FC<IAccordionProps> = ({ TitleTemplate, items, onItemClick }) => {
   // TODO: пока в голову не пришло в голову как сделать лучше
   const [activeList, setActiveList] = React.useState<boolean[]>([]);

   React.useEffect(() => {
      setActiveList(new Array(items.length).fill(false));
   }, [items]);

   const setActiveListItem = (index: number) => {
      setActiveList(activeList.map((item, i) => {
         if (i === index) {
            item = !item;
         }
         return item;
      }));
      onItemClick?.(index);
   }

   return (
      <>
         {items && items.map((item, index) => (
            <div onClick={() => setActiveListItem(index)} key={index} className='Accordion-item'>
               <TitleTemplate
                  title={item.title}
                  active={activeList[index]}
               />
               <div className={'Accordion-item-content ' + (activeList[index] === true ? 'Accordion-item-content-show' : 'Accordion-item-content-hide')}>
                  {item.ItemTemplate}
               </div>
            </div>
         ))}
      </>
   );
}

export default Accordion;
