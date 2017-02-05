import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import commentApp from './reducers/commentReducers';

const store = createStore(commentApp);

render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);