import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
// import App from './containers/App';
import rootSaga from './sagas';
import Root from './Root';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
render(
    <BrowserRouter>
        <Root store={store}/>
    </BrowserRouter>,
document.getElementById('root'),
);