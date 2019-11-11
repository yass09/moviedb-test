import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	font-size: 2em;
	justify-content: center;
	list-style: none;
	margin: 0.5em;
	padding: 0;
	${'' /* width: 100%; */}
	height: 100%;
	@media (max-width: 375px) {
		height: 85%;
	}
`;

const MovieList = ({ movies }) => (
	<List>
		{movies.map(movie => (
			<MovieItem key={movie.id} movie={movie} />
		))}
	</List>
);

MovieList.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
	movies: [],
};

export default MovieList;
