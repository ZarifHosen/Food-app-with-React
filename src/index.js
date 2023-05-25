import ReactDOM from 'react-dom/client';
import { Scrollbar } from 'react-scrollbars-custom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Scrollbar style={{
    width: '100%',
    height: '100vh'
}}>
    <App />
</Scrollbar>);
