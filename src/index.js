import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./state/reducers/store";
import {Provider} from "react-redux";

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

reportWebVitals();
