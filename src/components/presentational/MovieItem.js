import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { POSTER_BASE_URL } from '../../constants';

const Item = styled.li`
	border: 0.05em solid black;
	display: flex;
	flex-wrap: wrap;
	margin: 0.5em;
	width: 38%;
	border-radius: 0.15em;
	@media (max-width: 1024px) {
		height: auto;
		width: 21%;
	}
	@media (max-width: 768px) {
		height: auto;
		width: 28%;
	}
	@media (max-width: 375px) {
		width: 85%;
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

const MovieInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.4em;
	width: 50%;
	@media (max-width: 768px) {
		height: auto;
		width: 90%;
	}
`;

const MovieInfoHeader = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin-bottom: 0.5em;
	position: relative;
`;

const MovieInfoTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	left: 1.5em;
	margin-left: 0.2em;
	position: relative;
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

const MovieDate = styled.p`
	font-size: 0.5em;
	margin: 0;
`;

const MovieRating = styled.div`
	align-items: center;
	background-color: #0d1c23;
	border: 0.1em solid #5fce80;
	border-radius: 50%;
	color: #5fce80;
	display: flex;
	justify-content: center;
	height: 1.2em;
	width: 1.2em;
	position: absolute;
`;

const MovieRatingText = styled.p`
	font-size: 0.5em;
	font-weight: 700;
	margin: 0;
`;

const MovieInfoBody = styled.div`
	width: 100%;
	height: 40%;
`;

const MovieOverview = styled.p`
	font-size: 0.6em;
	margin: 0;
	max-width: 100%;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const MovieBtn = styled.p`
	font-size: 0.5em;
	font-weight: 700;
	align-self: flex-end;
`;

const MovieItem = ({ movie }) => {
	const {
		poster_path: posterPath,
		title,
		vote_average: rating,
		release_date: releaseDate,
		overview,
	} = movie;
	return (
		<Item>
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
				</MovieInfoBody>
				<MovieBtn>Click for more</MovieBtn>
			</MovieInfoContainer>
		</Item>
	);
};

MovieItem.propTypes = {
	movie: PropTypes.shape({
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
