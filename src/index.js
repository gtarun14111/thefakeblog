import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { userActions, blogActions, commentActions } from './States/reducers';
import { createLogger } from 'redux-logger';



const logger = createLogger();
const rootReducer = combineReducers({ userActions, 
	blogActions, 
	commentActions });
const store = createStore(rootReducer, applyMiddleware(logger));


ReactDOM.render(
  <React.StrictMode>
  	<Provider store = {store}>
    	<App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
