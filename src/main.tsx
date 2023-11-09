import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { StoreProvider } from './app/providers/StoreProvider';
import { ModalWrapper } from 'react-modal-opener';
import 'react-modal-opener/dist/index.css';
import './app/styles/index.less';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <ThemeProvider>
      <ModalWrapper startZindex={10}>
        <App />
      </ModalWrapper>
    </ThemeProvider>
  </StoreProvider>
);
