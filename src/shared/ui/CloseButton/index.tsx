import React from 'react';
import './styles.less';

export interface ICloseButtonProps {
   width?: string;
   height?: string;
   onClick?: () => void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({width = '24px', height = '24px', onClick}) => {
   return(
      <button style={{
         width,
         height
      }} className='CloseButton' onClick={onClick}></button>
   );
}

export default CloseButton;