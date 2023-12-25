import React from 'react';
import { useParseConfig } from '../../../entities/ParserConfig';

const TagsForDelete: React.FC = () => {
   const { tagsForDelete } = useParseConfig();

   return (
      <>
         <h2 className='pb-16'>Тэги, которые нужно удалить</h2>
         <ul>
            {tagsForDelete && tagsForDelete.map((tagName) => (
               <li key={tagName} className='pb-4'>
                  <p>{tagName}</p>
               </li>
            ))}
         </ul>
      </>
   );
}

export default TagsForDelete;
