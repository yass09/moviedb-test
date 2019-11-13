import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMovies } from '../../redux/actions/loadMoviesActions';
import { rootSaga } from '../../redux/sagas';

import MovieList from '../presentational/MovieList';

const mapStateToProps = state => ({
	movies: state.movieList.movies,
	loading: state.loading,
	error: state.error,
});
const mapDispatchToProps = dispatch => ({
	getMovies: () => dispatch(loadMovies()),
	rootSaga,
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
