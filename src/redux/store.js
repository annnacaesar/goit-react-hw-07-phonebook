import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacs/contactsReducer';
import { contactsApi } from './contacs/contactsSlice';
import { contactsReducer } from './contactSlice';

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(contactsApi.middleware),
});

// import { persistStore } from 'redux-persist';
// import { contactSlice } from './contactSlice';
// import {
// 	persistStore,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist';
// import { dispatch } from 'jest-circus/build/state';

// export const store = configureStore({
// 	reducer: {
// 		contacts: contactSlice.reducer,
// 	},
// });

// const addContact = contact => {
// 	return {
// 		type: 'addContact',
// 		payload: contact,
// 	};
// };

// const addAsyncContact = contact => {
// 	return {
// 		type: 'addContact',
// 		payload: fetch('/contact'),
// 	};
// };

// const reducer = (state, action) => [...state, ...action.payload];

// const addContactOperation = contact => dispatch => {
// 	const user = fetch('/contact');
// 	dispatch(addContact(user));
// };

// export const persistor = persistStore(store);
