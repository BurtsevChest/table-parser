import React from "react";
import { DialogOpener } from "react-modal-opener";

interface ConfirmDeleteDialogProps {
   onDelete?: () => void;
   onSave?: () => void;
   id: number;
   title?: string;
}

const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({onDelete, onSave, id, title}) => {
   const onDeleteClick = () => {
      DialogOpener.dialogClose(id);
      onDelete?.();
   }
   
   const onSaveClick = () => {
      DialogOpener.dialogClose(id);
      onSave?.();
   }

   return (
      <>
         <h3 style={{textAlign: 'center'}} className="pb-16">
            {title ? title : 'Вы точно хотите удалить?'}
         </h3>
         <div className="flex-container">
            <div className="flex-col flex-col-6 flex-col-sm-12">
               <button onClick={onDeleteClick} className="button" style={{
                  backgroundColor: 'red',
                  padding: '5px 20px',
                  width: '100%',
               }}>Удалить</button>
            </div>
            <div className="flex-col flex-col-6 flex-col-sm-12">
               <button onClick={onSaveClick} className="button" style={{
                  backgroundColor: 'green',
                  padding: '5px 20px',
                  width: '100%',
               }}
               >Отмена</button>
            </div>
         </div>
      </>
   );
}

export default ConfirmDeleteDialog;
