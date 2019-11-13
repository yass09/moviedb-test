import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadMovieDetails } from '../../redux/actions/movieDetailsActions';
import { rootSaga } from '../../redux/sagas';

const mapStateToProps = state => ({
	movie: state.selectedMovie.movieDetails,
	loading: state.loading,
	error: state.error,
});

const mapDispatchToProps = dispatch => ({
	getMovieDetails: id => dispatch(loadMovieDetails(id)),
	rootSaga,
});

const MovieDetailsView = props => {
	const { getMovieDetails, match: { params: { id } = {} } = {} } = props;
	useEffect(() => {
		const getMovieDetailsOnLoad = () => getMovieDetails(id);
		getMovieDetailsOnLoad();
	}, [getMovieDetails, id]);

	return <div> Movie Details</div>;
};

MovieDetailsView.propTypes = {
	getMovieDetails: PropTypes.func.isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string,
		}),
	}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsView);
