import { DialogOpener } from 'react-modal-opener';

const dialog = new DialogOpener();

dialog.defaultStyles = {
   backgroundColor: '#141414',
   boxShadow: 'rgb(0 0 0 / 40%) 0px 0px 40px',
   padding: '20px',
   borderRadius: '20px',
   color: 'white',
   minHeight: '700px',
   minWidth: '500px'
}

export default dialog;
