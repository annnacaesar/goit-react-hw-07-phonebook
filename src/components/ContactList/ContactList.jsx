import { Item, ButtonClose, Contact } from './ContactList.styled';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/contactSlice';

const ContactList = ({ visibleContacts }) => {
	const dispatch = useDispatch();
	return (
		<ul>
			{visibleContacts &&
				visibleContacts.map(({ id, name, number }) => {
					return (
						<Item key={id}>
							<Contact>
								{name}: {number}
							</Contact>
							<ButtonClose
								type="button"
								onClick={() => dispatch(deleteItem(id))}
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
	visibleContacts: PropTypes.array,
};

export default ContactList;
