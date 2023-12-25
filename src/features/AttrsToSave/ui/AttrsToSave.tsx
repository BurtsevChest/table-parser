import React, { useState } from 'react';
import { useAttributesToSave } from '../../../entities/ParserConfig';
import confirmDelete from '../../confirmDelete';
import AddButton from '../../../shared/ui/AddButton';
import dialog from '../../../shared/config/dialog';

const AttrsToSave: React.FC = () => {
   const { attributesToSave, changeNewAttrsToSave, deleteAttributeToSave } = useAttributesToSave();

   const openAddDialog = () => {
      dialog.open({
         Component: () => import('./AddItemDialog'),
         name: 'addAttrToSaveDialog',
         styles: {
            ...dialog.defaultStyles,
            minWidth: 'none',
            minHeight: 'none',
            borderRadius: '12px',
            padding: '16px',
         },
      });
   }

   return (
      <div className="pb-32 pb-xm-24">
         <div className="flex pb-16 a-items-center">
            <h2>Атрибуты, которые нужно сохранить</h2>
            <AddButton
               className='ml-8'
               onClick={openAddDialog}
            />
         </div>
         <div className='flex-container'>
            {attributesToSave && attributesToSave.map((value, index) => (
               <div key={value} className='pointer flex-col flex-col-4'>
                  <ItemTemplate
                     index={index}
                     title={value}
                     changeNewAttrsToSave={changeNewAttrsToSave}
                     deleteAttributeToSave={deleteAttributeToSave}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}

const ItemTemplate = ({
   title,
   index,
   changeNewAttrsToSave,
   deleteAttributeToSave
}: {
   title: string;
   index: number;
   changeNewAttrsToSave: ({ index, value }: { index: number; value: string }) => void;
   deleteAttributeToSave: (attrName: string) => void;
}) => {
   const [isInput, setIsInput] = useState<boolean>(false);
   const [value, setValue] = useState<string>(title);

   const onUpdate = () => {
      if (value === '') {
         setValue(title);
      }
      else if (value !== title) {
         changeNewAttrsToSave({
            index,
            value
         });
      }
      setIsInput(false);
   }

   const onDelete = () => {
      confirmDelete({
         title: 'Удалить элемент?',
         onDelete: () => {
            deleteAttributeToSave(value);
            setIsInput(false);
            setValue(title);
         }
      });
   }

   if (!isInput) {
      return (
         <>
            <div className="flex">
               <div className="">{value}</div>
               <span onClick={() => setIsInput(true)}>🖆</span>
               <span onClick={onDelete}>❌</span>
            </div>
         </>
      );
   }

   if (isInput) {
      return (
         <>
            <div className="flex">
               <input value={value} onChange={(e) => setValue(e.target.value)} />
               <span onClick={onUpdate}>✓</span>
               <span onClick={onDelete}>❌</span>
            </div>
         </>
      );
   }
}

export default AttrsToSave;
