import { InputFilter, LabelFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../redux/contactSlice';

const Filter = () => {
	const dispatch = useDispatch();
	return (
		<LabelFilter>
			<InputFilter
				type="text"
				onChange={e => dispatch(filterItems(e.currentTarget.value))}
			/>{' '}
			Find contacts by name
		</LabelFilter>
	);
};

export default Filter;
