import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { userActions,
	showBlogList,
	blogActions,
	commentActions,
	actionUpdates,
	showBlogPost,
	cmntAddAction,
	blogAddAction } from './States/reducers';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const rootReducer = combineReducers({ userActions, 
	blogActions,
	showBlogList,
	commentActions,
	actionUpdates,
	showBlogPost,
	cmntAddAction,
	blogAddAction });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <React.StrictMode>
  	<Provider store = {store}>
    	<App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();