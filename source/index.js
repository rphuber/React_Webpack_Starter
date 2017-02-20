import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducers from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<Route path='/' component={App} />
		</Router>
	</Provider>,
	document.querySelector('.container')
);
