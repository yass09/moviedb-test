import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { POSTER_BASE_URL } from '../../constants';
import {
	MovieRating,
	MovieRatingText,
	MovieDate,
	MovieInfoHeader,
	MovieInfoContainer,
	MovieInfoTitleContainer,
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
`;

const MovieRatingLg = styled(MovieRating)`
	height: 3em;
	width: 3em;
	left: 0.5em;
	p {
		font-size: 1.5em;
	}
`;

const MovieInfoTitleContainerLg = styled(MovieInfoTitleContainer)`
	left: 4em;
`;

const MovieDateLg = styled(MovieDate)`
	font-size: 1em;
	font-weight: 600;
	p {
		margin: 0 0.5em;
		font-weight: 400;
	}
`;

const MovieInfoBodyLg = styled(MovieInfoBody)`
	margin-left: 1em;
	p {
		margin: 0.5em 0;
		text-align: justify;
	}
`;

const MoviePoster = styled.img`
	height: 20em;
	width: auto;
`;

const MovieHeaderDetailsContainer = styled.div`
	color: white;
	display: flex;
	flex-wrap: wrap;
	width: 50%;
	min-height: 20em;
`;

const MovieInfoTitle = styled.h2`
	font-size: 2.5em;
	margin: 0 0 0.1em 0;
	display: inline-block;
	width: max-content;
`;

const MovieGenresContainer = styled.div`
	display: flex;
	p {
		margin: 0 0.5em 0.2em 0;
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
		background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${POSTER_BASE_URL}${backdropPath}) no-repeat center / 100% fixed`,
	};
	return (
		<MovieHeaderContainer style={bgStyle}>
			<MovieHeaderDetailsContainer>
				<MoviePoster src={`${POSTER_BASE_URL}${posterPath}`} />
				<MovieInfoContainer>
					<MovieInfoHeader>
						<MovieRatingLg>
							<MovieRatingText>{rating}</MovieRatingText>
						</MovieRatingLg>
						<MovieInfoTitleContainerLg>
							<MovieInfoTitle>{title}</MovieInfoTitle>
							<MovieGenresContainer>
								{genres &&
									genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
							</MovieGenresContainer>
							<MovieDateLg>{releaseDate}</MovieDateLg>
						</MovieInfoTitleContainerLg>
					</MovieInfoHeader>
					<MovieInfoBodyLg>
						<p>{overview}</p>
					</MovieInfoBodyLg>
					<MovieInfoFooter>
						Add to Favourites{' '}
						<MovieInfoFooterIcon
							src={isFavourite ? starIconGold : starIcon}
							onClick={() => toggleFavourite(movie)}
						/>
					</MovieInfoFooter>
				</MovieInfoContainer>
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
