import styled from 'styled-components';
import React from 'react';

const HeaderContainer = styled.header`
	background-color: #0d1c23;
	border-bottom: lightgrey 0.1em solid;
	box-sizing: border-box;
	color: #5fce80;
	height: 14vh;
	padding: 3em 0 0 2em;
	width: 100%;

	@media (max-width: 375px) {
		padding: 2.5em 0 0 1em;
		height: 12vh;
	}
`;

const HeaderTitle = styled.h1`
	font-family: 'Open Sans';
	font-size: 6vh;
	margin: 0;
	display: inline-block;

	@media (max-width: 375px) {
		font-size: 5vh;
	}
`;

const Header = () => (
	<HeaderContainer>
		{' '}
		<HeaderTitle>The Movie DB</HeaderTitle>{' '}
	</HeaderContainer>
);

export default Header;
