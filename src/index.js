import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css/reset.css';
import './index.css';
import App from './App';

window.jsonForGoogleApps = {customer: "", "cards": {}};
ReactDOM.render(<App />, document.getElementById('root'));