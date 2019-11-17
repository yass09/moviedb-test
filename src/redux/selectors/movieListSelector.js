import { createSelector } from 'reselect';

const getOrderBy = state => state.orderBy;
const getMovies = state => state.movieList.movies;

const sortByPopularity = (a, b) => b.popularity - a.popularity;

const sortByDate = (a, b) =>
	new Date(b.release_date) - new Date(a.release_date);

const orderedMovieListSelector = createSelector(
	[getMovies, getOrderBy],
	(movies, order) => {
		if (movies) {
			if (order === 'releaseDate') {
				return movies.sort(sortByDate);
			}
			return movies.sort(sortByPopularity);
		}
		return [];
	},
);

export default orderedMovieListSelector;
