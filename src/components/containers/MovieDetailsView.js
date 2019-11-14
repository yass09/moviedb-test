import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMovieDetails } from '../../redux/actions/movieDetailsActions';
import { rootSaga } from '../../redux/sagas';
import { toggleFavourite } from '../../redux/actions/toggleFavouriteActions';

import MovieList from '../presentational/MovieList';
import SectionHeading from '../presentational/SectionHeading';
import MovieHeader from '../presentational/MovieHeader';

const mapStateToProps = state => ({
	movie: state.selectedMovie.movieDetails,
	loading: state.selectedMovie.loading,
	error: state.selectedMovie.error,
	favourites: state.favourites,
});

const mapDispatchToProps = dispatch => ({
	getMovieDetails: id => dispatch(loadMovieDetails(id)),
	dispatchToggleFavourite: movie => dispatch(toggleFavourite(movie)),
	rootSaga,
});

const MovieDetailsView = props => {
	const {
		favourites,
		getMovieDetails,
		dispatchToggleFavourite,
		match: { params: { id } = {} } = {},
		movie,
		loading,
		error,
	} = props;

	useEffect(() => {
		const getMovieDetailsOnLoad = () => getMovieDetails(id);
		getMovieDetailsOnLoad();
	}, [getMovieDetails, id]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Oops, Something went wrong...</div>;

	const { recommendations: { results: recommendations } = {} } = movie;
	const isFavourite = favourites.includes(movie);
	return (
		<section>
			<MovieHeader
				movie={movie}
				toggleFavourite={dispatchToggleFavourite}
				isFavourite={isFavourite}
			/>
			<SectionHeading>Recommendations</SectionHeading>
			<MovieList movies={recommendations} />
		</section>
	);
};

MovieDetailsView.propTypes = {
	favourites: PropTypes.arrayOf(PropTypes.object),
	getMovieDetails: PropTypes.func.isRequired,
	dispatchToggleFavourite: PropTypes.func.isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}),
	}).isRequired,
	movie: PropTypes.shape({
		recommendations: PropTypes.shape({
			results: PropTypes.array,
		}),
	}),
	loading: PropTypes.bool,
	error: PropTypes.string,
};

MovieDetailsView.defaultProps = {
	movie: {},
	loading: false,
	error: null,
	favourites: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsView);
