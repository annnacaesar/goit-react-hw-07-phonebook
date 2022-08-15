import { Item, ButtonClose, Contact } from './ContactList.styled';
import { PropTypes } from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacs/contactsSlice';

const ContactList = ({ contacts }) => {
	const [deleteContact] = useDeleteContactMutation();
	return (
		<ul>
			{contacts &&
				contacts.map(({ id, name, number }) => {
					return (
						<Item key={id}>
							<Contact>
								{name}: {number}
							</Contact>
							<ButtonClose
								type="button"
								onClick={() => deleteContact(id)}
							>
								x
							</ButtonClose>
						</Item>
					);
				})}
		</ul>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.array,
};

export default ContactList;
