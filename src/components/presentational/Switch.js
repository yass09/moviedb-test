import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SwitchContainer = styled.div`
	align-items: center;
	display: flex;
`;

const SwitchOptions = styled.p`
	margin: 0 0.5em;
	font-weight: 600;
`;

const CheckBox = styled.input.attrs({
	type: 'checkbox',
	id: 'switch',
})`
	height: 0;
	visibility: hidden;
	width: 0;
	&:checked + .switch-label .switch-button {
		left: calc(100% - 2px);
		transform: translateX(-100%);
	}
`;

const Label = styled.label.attrs({
	htmlFor: 'switch',
})`
	align-items: center;
	background: grey;
	border-radius: 100px;
	cursor: pointer;
	display: flex;
	height: 50px;
	justify-content: space-between;
	position: relative;
	transition: background-color 0.2s;
	width: 100px;
	&:active .switch-button {
	}
`;

const SwitchButton = styled.span`
	content: '';
	position: absolute;
	top: 2px;
	left: 2px;
	width: 45px;
	height: 45px;
	border-radius: 45px;
	transition: 0.2s;
	background: #fff;
	box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

const Switch = ({ isDate, handleSwitch }) => (
	<SwitchContainer>
		<SwitchOptions checked={isDate}>Popularity</SwitchOptions>
		<CheckBox />
		<Label
			onClick={handleSwitch}
			className="switch-label"
			style={{ background: isDate && '#5fce80' }}
		>
			<SwitchButton className="switch-button" />
		</Label>
		<SwitchOptions>Release Date</SwitchOptions>
	</SwitchContainer>
);

Switch.propTypes = {
	isDate: PropTypes.bool,
	handleSwitch: PropTypes.func,
};

Switch.defaultProps = {
	isDate: false,
	handleSwitch: null,
};

export default Switch;
