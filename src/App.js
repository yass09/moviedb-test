/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AppWrapper from './components/presentational/AppWrapper';
import Header from './components/presentational/Header';
import BodyWrapper from './components/presentational/Main';
import ContentWrapper from './components/presentational/ContentWrapper';
import MovieListView from './components/containers/MovieListView';
import MovieDetailsView from './components/containers/MovieDetailsView';
import * as routes from './routes';

const App = () => (
	<Router>
		<AppWrapper>
			<Header />
			<BodyWrapper>
				<ContentWrapper>
					<Switch>
						<Route path={routes.MOVIELIST} exact component={MovieListView} />
						<Route
							path={routes.MOVIEDETAILS}
							exact
							component={MovieDetailsView}
						/>
					</Switch>
				</ContentWrapper>
			</BodyWrapper>
		</AppWrapper>
	</Router>
);

export default App;
