import { AppContainer, Container, TitleMain, Title } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/contactSlice';
import { getContact, getFilterWord } from '../../redux/selectors';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

export const App = () => {
	const dispatch = useDispatch();

	const contacts = useSelector(getContact);
	const filterWord = useSelector(getFilterWord);

	const addContact = contactObj => {
		const findContact = contacts.find(contact =>
			contact.name.toLowerCase().includes(contactObj.name.toLowerCase())
		);
		findContact
			? toast.info(`${contactObj.name} is already in contact`)
			: dispatch(addItem(contactObj));
	};

	const isVisibleContacts = () => {
		if (filterWord) {
			const normalizeFilter = filterWord.toLowerCase();

			if (contacts.length !== 0) {
				return contacts.filter(contact =>
					contact.name.toLowerCase().includes(normalizeFilter)
				);
			}
		}
		return contacts;
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
				<ContactForm onSubmit={addContact} />
			</Container>
			<Container>
				<Title>Contacts</Title>
				<Filter />
				<ContactList visibleContacts={isVisibleContacts()} />
			</Container>
		</AppContainer>
	);
};
