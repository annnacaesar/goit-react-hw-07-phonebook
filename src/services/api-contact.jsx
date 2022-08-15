import axios from 'axios';

axios.defaults.baseURL = 'https://62d6711f51e6e8f06f09a84f.mockapi.io/v1/';

export const fetchContacts = async () => {
	const { data } = await axios.get(`/contacts`);
	return data;
};
