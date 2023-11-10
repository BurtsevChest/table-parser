import React from 'react';

export interface IItemTemplate {
   attr: string;
   value: string;
}

const ItemTemplate: React.FC<IItemTemplate> = ({ attr, value }) => {
   return (
      <div className='AttrList-ItemTemplate' onClick={(e) => e.stopPropagation()}>
         <p>
            <span style={{ color: 'purple' }}>{attr}</span> = "<span style={{ color: 'grey' }}>{value}</span>"
         </p>
      </div>
   );
}

export default ItemTemplate;
