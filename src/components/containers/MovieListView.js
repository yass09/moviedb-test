import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMovies } from '../../redux/actions/loadMoviesActions';
import { setOrderAction } from '../../redux/actions/setOrderAction';
import { rootSaga } from '../../redux/sagas';
import orderedMovieListSelector from '../../redux/selectors/movieListSelector';

import MovieList from '../presentational/MovieList';
import SectionHeading from '../presentational/SectionHeading';
import ViewHeader from '../presentational/ViewHeader';
import Switch from '../presentational/Switch';

const mapStateToProps = state => ({
	movies: orderedMovieListSelector(state),
	loading: state.movieList.loading,
	error: state.movieList.error,
	orderBy: state.orderBy,
});
const mapDispatchToProps = dispatch => ({
	getMovies: () => dispatch(loadMovies()),
	setOrder: order => dispatch(setOrderAction(order)),
	rootSaga,
});

const MovieListContainer = props => {
	const { getMovies, setOrder, movies, loading, error, orderBy } = props;
	useEffect(() => {
		const getMoviesOnLoad = () => getMovies();
		getMoviesOnLoad();
	}, [getMovies]);

	const isOrderedByDate = orderBy === 'releaseDate';

	const handleOrder = () => {
		if (orderBy === 'popularity') {
			setOrder('releaseDate');
		} else {
			setOrder('popularity');
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Oops, Something went wrong...</div>;
	return (
		<section>
			<ViewHeader>
				<SectionHeading>Movies</SectionHeading>
				<Switch isDate={isOrderedByDate} handleSwitch={handleOrder} />
			</ViewHeader>
			<MovieList movies={movies} />
		</section>
	);
};

MovieListContainer.propTypes = {
	getMovies: PropTypes.func.isRequired,
	setOrder: PropTypes.func.isRequired,
	movies: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
	error: PropTypes.string,
	orderBy: PropTypes.string,
};

MovieListContainer.defaultProps = {
	movies: [],
	loading: false,
	error: null,
	orderBy: 'popularity',
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
