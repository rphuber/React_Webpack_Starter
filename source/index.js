import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';

import routes, { RouteWithSubRoutes } from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<div>
				{ routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</div>
		</Router>
	</Provider>,
	document.querySelector('.container')
);
