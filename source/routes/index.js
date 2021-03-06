import React from 'react';
import { Route } from 'react-router-dom';

import App from '../components/App';

const routes = [
	{
		path: '/',
		component: App
	}
];


export default routes;

export const RoutesWithSubRoutes = (route) => (
	<Route path={route.path} exact={route.exact} render={ props => (
		<route.component {...props} routes={route.routes} />
	)}/>
);

