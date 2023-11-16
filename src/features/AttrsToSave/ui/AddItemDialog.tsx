import React, { useState } from "react";
import { useAttributesToSave } from "../../../entities/ParserConfig";
import { DialogOpener } from "react-modal-opener";

interface IAdditemDialog {
   id: number;
}

const AddItemDialog: React.FC<IAdditemDialog> = ({ id }) => {
   const { addAttributeToSave } = useAttributesToSave();
   const [value, setValue] = useState<string>('');

   const handleClick = () => {
      if (value) {
         addAttributeToSave(value)
      }
      DialogOpener.dialogClose(id);
   }

   return (
      <>
         <div className="flex flex-column a-items-center">
            <h3 className="pb-16 a-self-start">Название атрибута</h3>
            <input className="mb-16" type="text" value={value} onChange={(e) => setValue(e.target.value)} style={{
               borderRadius: '12px',
               padding: '5px 15px'
            }}/>
            <button onClick={handleClick} className="button" style={{ backgroundColor: 'green', width: 'min-content' }}>Ок</button>
         </div>
      </>
   );
}

export default AddItemDialog;
