import React from "react";
import './styles.less';
import CloseButton from "../CloseButton";

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
      <div className="InputContainer-close">
         <CloseButton
            onClick={clearHTML}
            width="30px"
            height="30px"
         />
      </div>
   </div>
}

export default InputContainer;
