import React, { useState } from 'react';

export interface item {
   attr: string;
   value: string;
}

export interface IItemTemplate {
   attr: string;
   value: string;
   onItemUpdate: (item: item) => void;
}

const ItemTemplate: React.FC<IItemTemplate> = ({ attr, value, onItemUpdate }) => {
   const [attrName, setAttrName] = useState(attr);
   const [attrValue, setValue] = useState(value);

   const handleClick = () => {
      onItemUpdate({
         attr: attrName,
         value: attrValue,
      });
   }

   return (
      <div className='AttrList-ItemTemplate' onClick={(e) => e.stopPropagation()}>
         <p>
            <input type="text" value={attrName} onChange={(e) => setAttrName(e.target.value)} style={{ color: 'purple' }} />
            <input type="text" value={attrValue} onChange={(e) => setValue(e.target.value)} style={{ color: 'grey' }} />
            <button onClick={handleClick}>Changed</button>
            {/* <span style={{ color: 'purple' }}>{attr}</span> = "<span style={{ color: 'grey' }}>{value}</span>" */}
         </p>
      </div>
   );
}

export default ItemTemplate;
