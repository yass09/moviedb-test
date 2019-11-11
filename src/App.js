/* eslint-disable react/prop-types */
import React from 'react';

import AppWrapper from './components/presentational/AppWrapper';
import Header from './components/presentational/Header';
import Main from './components/presentational/Main';
import MovieListView from './components/containers/MovieListView';

const App = () => (
	<AppWrapper>
		<Header />
		<Main>
			<MovieListView />
		</Main>
	</AppWrapper>
);

export default App;
