import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMoviesSaga } from '../../redux/sagas/loadMoviesSaga';
import { loadMovies } from '../../redux/actions/loadMoviesActions';

import MovieList from '../presentational/MovieList';

const mapStateToProps = state => ({
	movies: state.movies,
	loading: state.loading,
	error: state.error,
});
const mapDispatchToProps = dispatch => ({
	getMovies: () => dispatch(loadMovies()),
	loadMoviesSaga,
});

const MovieListContainer = props => {
	const { getMovies, movies } = props;
	useEffect(() => {
		const getMoviesOnLoad = () => getMovies();
		getMoviesOnLoad();
	}, [getMovies]);
	return <MovieList movies={movies} />;
};

MovieListContainer.propTypes = {
	getMovies: PropTypes.func.isRequired,
	movies: PropTypes.arrayOf(PropTypes.object),
};

MovieListContainer.defaultProps = {
	movies: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
