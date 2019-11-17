import styled from 'styled-components';

export const MovieInfoHeader = styled.div`
	align-items: center;
	display: flex;
	margin-bottom: 0.5em;
	position: relative;
	width: 100%;
`;
export const MovieInfoContainer = styled.div`
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	padding: 0.4em;
	width: 49%;
	@media (max-width: 1024px) {
		height: auto;
		width: 90%;
	}
`;

export const MovieInfoBody = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-height: 10em;
`;

export const MovieInfoTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	left: 1.5em;
	margin-left: 0.2em;
	position: relative;
`;

export const MovieRating = styled.div`
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

export const MovieRatingText = styled.p`
	font-size: 0.5em;
	font-weight: 700;
	margin: 0;
`;

export const MovieDate = styled.p`
	font-size: 0.5em;
	margin: 0;
`;
