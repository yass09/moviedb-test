import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMovies } from '../../redux/actions/loadMoviesActions';
import { rootSaga } from '../../redux/sagas';
import orderedMovieListSelector from '../../redux/selectors/movieListSelector';

import MovieList from '../presentational/MovieList';
import SectionHeading from '../presentational/SectionHeading';
import ViewHeader from '../presentational/ViewHeader';

const mapStateToProps = state => ({
	movies: orderedMovieListSelector(state),
	loading: state.movieList.loading,
	error: state.movieList.error,
});
const mapDispatchToProps = dispatch => ({
	getMovies: () => dispatch(loadMovies()),
	rootSaga,
});

const MovieListContainer = props => {
	const { getMovies, movies, loading, error } = props;
	useEffect(() => {
		const getMoviesOnLoad = () => getMovies();
		getMoviesOnLoad();
	}, [getMovies]);
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Oops, Something went wrong...</div>;
	return (
		<section>
			<ViewHeader>
				<SectionHeading>Movies</SectionHeading>
			</ViewHeader>
			<MovieList movies={movies} />
		</section>
	);
};

MovieListContainer.propTypes = {
	getMovies: PropTypes.func.isRequired,
	movies: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
	error: PropTypes.string,
};

MovieListContainer.defaultProps = {
	movies: [],
	loading: false,
	error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
