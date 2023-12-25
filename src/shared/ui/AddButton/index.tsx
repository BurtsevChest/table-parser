import React from "react";
import './styles.less'

export interface IAddButton {
   width?: string;
   height?: string;
   onClick?: () => void;
   styles?: React.CSSProperties;
   className?: string;
}

const AddButton: React.FC<IAddButton> = ({ onClick, width = '20px', height = '20px', styles, className }) => {
   return (
      <button
         className={'AddButton ' + className || ''}
         style={{ width, height, ...styles }}
         onClick={onClick}
      >
      </button>
   );
}

export default AddButton;
