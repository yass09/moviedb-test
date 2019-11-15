import styled from 'styled-components';
import React from 'react';

import NavigationLink from './NavigationLink';
import starIconGold from '../../assets/img/star_yellow.svg';

import * as routes from '../../routes';

const HeaderContainer = styled.header`
	background-color: #0d1c23;
	box-sizing: border-box;
	color: #5fce80;
	height: 14vh;
	padding: 3em 2em 0 2em;
	width: 100%;

	@media (max-width: 815px) {
		padding: 2em 1.5em 0 1.5em;
	}
	@media (max-width: 375px) {
		padding: 2.5em 1em 0 1em;
		height: 12vh;
	}
`;

const HeaderTitle = styled.h1`
	font-family: 'Open Sans';
	font-size: 6vh;
	margin: 0;
	display: inline-block;
	@media (max-width: 815px) {
		font-size: 5vh;
	}
	@media (max-width: 375px) {
		font-size: 5vh;
	}
`;

const HeaderLinkIcon = styled.img`
	height: 1.5em;
	width: 1.5em;
`;

const Nav = styled.nav`
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	width: 100%;
`;

const HeaderLink = styled(NavigationLink)`
	color: #5fce80;
	font-size: 1.5em;
`;

const Header = () => (
	<HeaderContainer>
		<Nav>
			<HeaderLink to={routes.MOVIELIST}>
				<HeaderTitle>The Movie DB</HeaderTitle>
			</HeaderLink>
			<HeaderLink to={routes.FAVOURITES}>
				<HeaderLinkIcon src={starIconGold} alt="link to favourites" />
			</HeaderLink>
		</Nav>
	</HeaderContainer>
);

export default Header;
