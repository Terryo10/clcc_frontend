import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { store } from "./state/reducers/store";
import { Provider } from "react-redux";
import { CustomBrowserRouter } from "./custom_browser_router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <CustomBrowserRouter>
            <App />
        </CustomBrowserRouter>
    </Provider>
)


