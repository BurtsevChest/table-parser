import React from 'react';

const TitleTemplate: React.FC<{ title: string }> = ({ title }) => {
   return (
      <div className='AttrList-TitleTemplate'>
         <span style={{ color: 'red' }}>{title}</span>
      </div>
   );
}

export default TitleTemplate;
