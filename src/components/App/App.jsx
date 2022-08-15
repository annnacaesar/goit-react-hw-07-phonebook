import { useState } from 'react';
import { AppContainer, Container, TitleMain, Title } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import { useGetContactsQuery } from '../../redux/contacs/contactsSlice';
import { ThreeCircles } from 'react-loader-spinner';

export const App = () => {
	const [filter, setFilter] = useState('');
	const { data, isFetching } = useGetContactsQuery();

	const changeFilter = event => {
		setFilter(event.currentTarget.value);
	};

	const isVisibleContacts = () => {
		const normalizeFilter = filter.toLowerCase();

		if (data) {
			if (data.length !== 0) {
				return data.filter(contact =>
					contact.name.toLowerCase().includes(normalizeFilter)
				);
			}
		}
		return;
	};

	return (
		<AppContainer>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				theme="dark"
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Container>
				<TitleMain>Phonebook</TitleMain>
				<ContactForm />
			</Container>
			<Container>
				<Title>Contacts</Title>
				{isFetching && <ThreeCircles color="var(--color-button)" />}
				<Filter filter={filter} onChange={changeFilter} />
				<ContactList contacts={isVisibleContacts()} />
			</Container>
		</AppContainer>
	);
};
