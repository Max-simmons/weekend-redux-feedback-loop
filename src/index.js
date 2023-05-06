import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state='', action) => {
    if (action.type === 'SET_NEW_FEELING') {
        const feelingScore = action.payload;
        return feelingScore 
    }
    return state;
}

const theStore = createStore(
    combineReducers({
        feelingReducer

    }),
    applyMiddleware(
        logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={theStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
