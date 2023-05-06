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

const understandingReducer = (state='', action) => {
    if (action.type === 'SET_NEW_UNDERSTANDING') {
        const understandingScore = action.payload;
        return understandingScore
    }
    return state;
}

const supportReducer = (state='', action) => {
    if (action.type === 'SET_NEW_SUPPORT') {
        const supportScore = action.payload;
        return supportScore
    }
    return state;
}

const commentReducer = (state='', action) => {
    if (action.type === 'SET_NEW_COMMENT') {
        const commentLeft = action.payload;
        return commentLeft
    }
    return state;
}

const theStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
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
