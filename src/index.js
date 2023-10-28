import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/style.scss';
import { HashRouter } from 'react-router-dom';

const container = document.getElementById('root');
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    container
);
