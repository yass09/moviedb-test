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
import NavigationLink from './NavigationLink';

const Item = styled.li`
	margin: 0.5em;
	width: 38%;
	@media (max-width: 1024px) {
		height: auto;
		width: 21%;
	}
	@media (max-width: 768px) {
		width: 28%;
	}
	@media (max-width: 375px) {
		width: 85%;
	}
`;

const MovieLink = styled(NavigationLink)`
	border: 0.05em solid black;
	border-radius: 0.15em;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1024px) {
		height: 100%;
	}
`;

const MovieImg = styled.img`
	height: 10em;
	@media (max-width: 1024px) {
		width: 100%;
	}
	@media (max-width: 375px) {
		height: auto;
	}
`;

const MovieTitle = styled.p`
	font-size: 0.6em;
	font-weight: 600;
	margin: 0 0 0.2em 0;
	width: 7em;
	overflow-wrap: break-word;
	word-break: break-word;
	@media (max-width: 375px) {
		height: auto;
		width: 11em;
	}
`;

const MovieOverview = styled.p`
	font-size: 0.6em;
	margin: 0;
	max-width: 100%;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-align: justify;
	@media (max-width: 1024px) {
		-webkit-line-clamp: 4;
	}
`;

const MovieBtn = styled.p`
	align-self: flex-end;
	font-size: 0.5em;
	font-weight: 700;
	margin-bottom: 0;
`;

const MovieItem = ({ movie }) => {
	const {
		id,
		poster_path: posterPath,
		title,
		vote_average: rating,
		release_date: releaseDate,
		overview,
	} = movie;

	return (
		<Item>
			<MovieLink to={`/movie/${id}`}>
				<MovieImg src={`${POSTER_BASE_URL}${posterPath}`} />
				<MovieInfoContainer>
					<MovieInfoHeader>
						<MovieRating>
							<MovieRatingText>{rating}</MovieRatingText>
						</MovieRating>
						<MovieInfoTitleContainer>
							<MovieTitle>{title}</MovieTitle>
							<MovieDate>{releaseDate}</MovieDate>
						</MovieInfoTitleContainer>
					</MovieInfoHeader>
					<MovieInfoBody>
						<MovieOverview>{overview}</MovieOverview>
						<MovieBtn>Click for more</MovieBtn>
					</MovieInfoBody>
				</MovieInfoContainer>
			</MovieLink>
		</Item>
	);
};

MovieItem.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		poster_path: PropTypes.string,
		vote_average: PropTypes.number,
		release_date: PropTypes.string,
		overview: PropTypes.string,
	}),
};

MovieItem.defaultProps = {
	movie: {},
};

export default MovieItem;
