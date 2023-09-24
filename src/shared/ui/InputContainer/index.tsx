import React from "react";
import './styles.less';

interface IInputContainer {
   clearTemplate: () => void;
}

const InputContainer: React.FC<IInputContainer> = ({clearTemplate}) => {
   const clearHTML = () => {
      const elem = document.querySelector('.InputContainer-content');
      if(elem) {
         elem.innerHTML = '';
         clearTemplate();
      }
   }

   return <div className="InputContainer">
      <div className="InputContainer-content" contentEditable></div>
      <button onClick={clearHTML} className="InputContainer-button button">Clear Template</button>
   </div>
}

export default InputContainer;
