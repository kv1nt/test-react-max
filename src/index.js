import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainLayout from './Components/MainLayout/MainLayout';


ReactDOM.render(
<MainLayout />,
 document.getElementById('root'));

serviceWorker.unregister();
