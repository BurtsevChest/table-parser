import React from 'react';

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
            <div onClick={() => setActiveListItem(index)} key={index}>
               <TitleTemplate
                  title={item.title}
                  active={activeList[index]}
               />
               {activeList[index] === true && item.ItemTemplate }
            </div>
         ))}
      </>
   );
}

export default Accordion;
