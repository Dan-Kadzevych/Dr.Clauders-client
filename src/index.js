import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import App from './App';
import { operations } from 'duck';
import { getMyProfile } from 'pages/Account/duck/operations';

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(routerMiddleware(history), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
store.dispatch(getMyProfile());
store.dispatch(operations.fetchAppConfig());

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('root')
);
