import styled from 'styled-components';

export const AppContainer = styled.div`
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
	display: flex;

	justify-content: center;
	font-size: 40px;
	color: var(--color);
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	width: 440px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
	background-color: var(--background-color);
	&:not(:last-child) {
		margin-right: 5px;
	}
`;

export const TitleMain = styled.h1`
	text-align: center;
	font-size: 72px;
`;

export const Title = styled.h2`
	text-align: center;
	font-size: 72px;
`;
