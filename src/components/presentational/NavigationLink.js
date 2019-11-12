import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	&.active {
		font-weight: bold;
	}
`;

export default NavigationLink;
