import { SidebarOpener } from "react-modal-opener";

const sidebar = new SidebarOpener();

sidebar.defaultStyles = {
   backgroundColor: '#141414',
   boxShadow: 'rgb(0 0 0 / 40%) 0px 0px 40px',
   width: '900px',
   maxWidth: '100%',
   maxHeight: '100%',
   minHeight: '700px',
   color: 'white',
   padding: '20px',
}

export default sidebar;
