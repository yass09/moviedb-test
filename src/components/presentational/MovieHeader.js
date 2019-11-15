import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { POSTER_BASE_URL } from '../../constants';
import {
	MovieRating,
	MovieRatingText,
	MovieDate,
	MovieInfoContainer,
	MovieInfoBody,
} from './MovieInfoElements';
import starIcon from '../../assets/img/star_black.svg';
import starIconGold from '../../assets/img/star_yellow.svg';

const MovieHeaderContainer = styled.div`
	height: 50vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 375px) {
		height: 90vh;
		background-size: cover !important;
	}
`;

const MovieInfoContainerLg = styled(MovieInfoContainer)`
	width: 70%;
	@media (max-width: 1024px) {
		height: auto;
		width: 55%;
	}
`;

const MovieRatingLg = styled(MovieRating)`
	align-self: flex-end;
	height: 3em;
	width: 3em;
	right: -1em;
	margin-right: 1em;
	p {
		font-size: 1.5em;
	}
	@media (max-width: 375px) {
		bottom: 4em;
	}
`;

const MovieDateLg = styled(MovieDate)`
	font-size: 1em;
	font-weight: 600;
	p {
		margin: 0;
		font-weight: 400;
	}
`;

const MovieInfoBodyLg = styled(MovieInfoBody)`
	p {
		margin: 0.5em 0;
		text-align: justify;
	}
`;

const MoviePoster = styled.img`
	height: 20em;
	width: auto;
	margin-right: 1em;
`;

const MovieHeaderDetailsContainer = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 55%;
	min-height: 20em;
	@media (max-width: 1500px) {
		width: 70%;
		p {
			display: -webkit-box;
			-webkit-line-clamp: 8;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
	@media (max-width: 1024px) {
		width: 100%;
		p {
			-webkit-line-clamp: 6;
		}
	}
`;

const MovieInfoTitle = styled.h2`
	font-size: 2.5em;
	margin: 0;
	display: inline-block;
	@media (max-width: 375px) {
		font-size: 1.5em;
	}
`;

const MovieGenresContainer = styled.div`
	display: flex;
	p {
		margin: 0 0.5em;
	}
`;

const MovieInfoFooter = styled.div`
	align-self: flex-end;
	display: flex;
	align-items: center;
`;

const MovieInfoFooterIcon = styled.img`
	height: 1.5em;
	width: 1.5em;
	margin: 0 0.5em;
`;

const MovieMetaContainer = styled.div`
	align-items: center;
	display: flex;
	position: relative;
	${'' /* justify-content: space-between; */};
`;

const MovieHeader = ({ movie, isFavourite, toggleFavourite }) => {
	const {
		backdrop_path: backdropPath,
		poster_path: posterPath,
		genres,
		overview,
		release_date: releaseDate,
		title,
		vote_average: rating,
	} = movie;
	const bgStyle = {
		background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0.5)), url(${POSTER_BASE_URL}${backdropPath}) no-repeat center / 100% fixed`,
	};

	return (
		<MovieHeaderContainer style={bgStyle}>
			<MovieHeaderDetailsContainer>
				<MoviePoster src={`${POSTER_BASE_URL}${posterPath}`} />
				<MovieInfoContainerLg>
					<MovieInfoTitle>{title}</MovieInfoTitle>
					<MovieInfoBodyLg>
						<MovieMetaContainer>
							<MovieRatingLg>
								<MovieRatingText>{rating}</MovieRatingText>
							</MovieRatingLg>
							<MovieDateLg>{releaseDate}</MovieDateLg>
							<MovieGenresContainer>
								{genres &&
									genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
							</MovieGenresContainer>
						</MovieMetaContainer>
						<p>{overview}</p>
					</MovieInfoBodyLg>
					<MovieInfoFooter>
						Add to Favourites{' '}
						<MovieInfoFooterIcon
							src={isFavourite ? starIconGold : starIcon}
							onClick={() => toggleFavourite(movie)}
						/>
					</MovieInfoFooter>
				</MovieInfoContainerLg>
			</MovieHeaderDetailsContainer>
		</MovieHeaderContainer>
	);
};

MovieHeader.propTypes = {
	movie: PropTypes.shape({
		backdrop_path: PropTypes.string,
		poster_path: PropTypes.string,
		genres: PropTypes.array,
		overview: PropTypes.string,
		release_date: PropTypes.string,
		title: PropTypes.string,
		recommendations: PropTypes.shape({
			results: PropTypes.array,
		}),
		vote_average: PropTypes.number,
	}),
	isFavourite: PropTypes.bool,
	toggleFavourite: PropTypes.func.isRequired,
};
MovieHeader.defaultProps = {
	movie: {},
	isFavourite: false,
};

export default MovieHeader;
