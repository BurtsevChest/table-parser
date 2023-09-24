import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './app/styles/index.less';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
);
