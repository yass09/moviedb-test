import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieList from '../presentational/MovieList';
import SectionHeading from '../presentational/SectionHeading';

const mapStateToProps = state => ({
	favourites: state.favourites,
});

const FavouritesView = props => {
	const { favourites } = props;
	return (
		<section>
			<SectionHeading>Favourites</SectionHeading>
			{favourites.length > 0 && <MovieList movies={favourites} />}
		</section>
	);
};

FavouritesView.propTypes = {
	favourites: PropTypes.arrayOf(PropTypes.object),
};

FavouritesView.defaultProps = {
	favourites: [],
};

export default connect(mapStateToProps)(FavouritesView);
