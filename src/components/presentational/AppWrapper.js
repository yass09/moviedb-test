import styled from 'styled-components';

const AppWrapper = styled.div`
	height: 100vh;
	width: 100%;
	@media screen and (max-width: 1024px) {
		height: auto;
		min-height: -webkit-fill-available;
	}
`;

export default AppWrapper;
