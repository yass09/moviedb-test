/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AppWrapper from './components/presentational/AppWrapper';
import Header from './components/presentational/Header';
import Main from './components/presentational/Main';
import MovieListView from './components/containers/MovieListView';
import MovieDetailsView from './components/containers/MovieDetailsView';
import * as routes from './routes';

const App = () => (
	<Router>
		<AppWrapper>
			<Header />
			<Main>
				<Switch>
					<Route path={routes.MOVIELIST} exact component={MovieListView} />
					<Route
						path={routes.MOVIEDETAILS}
						exact
						component={MovieDetailsView}
					/>
				</Switch>
			</Main>
		</AppWrapper>
	</Router>
);

export default App;
