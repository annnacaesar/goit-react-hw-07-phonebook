import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const InputContainer = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	margin: 10px 0 10px 0;
	display: flex;
	justify-content: center;

	& label {
		display: flex;
		flex-direction: column;
		font-size: 22px;
		color: var(--color-label);
		margin-bottom: 15px;

		&:not(:last-child) {
			margin-right: 10px;
		}
	}
`;

export const Error = styled(ErrorMessage)`
	font-size: 14px;
	color: var(--color-warning);
`;

export const Input = styled(Field)`
	background-color: var(--color-input);
	width: 200px;
	height: 40px;
	margin: 0;
	padding: 0 15px 0 15px;
	border-radius: 5px;
`;

export const ButtonSubmit = styled.button`
	width: 200px;
	height: 40px;
	border-radius: 5px;
	color: var(--color-button);
	background-color: inherit;
	border: 1px solid var(--color-button);
`;
