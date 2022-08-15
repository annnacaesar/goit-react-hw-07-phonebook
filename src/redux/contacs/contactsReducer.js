// import {
// 	createReducer,
// 	combineReducers,
// 	// createSlice,
// } from '@reduxjs/toolkit';
// import { fetchContacts } from './contactsOperation';

// const items = createReducer([], {
// 	[fetchContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
// 	[fetchContacts.pending]: () => true,
// 	[fetchContacts.fulfilled]: () => false,
// 	[fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
// 	[fetchContacts.rejected]: (_, action) => action.payload,
// 	[fetchContacts.pending]: () => null,
// });

// export default combineReducers({
// 	items,
// 	isLoading,
// 	error,
// });

//------------------------

// export const contactSlice = createSlice({
// 	name: 'contacts',
// 	initialState: {
// 		items: [],
// 		isLoading: false,
// 		error: null,
// 	},
// 	extraReducers: {
// 		[fetchContacts.fulfilled]: (state, action) => {
// 			return (state.items = [action.payload, ...state.items]);
// 		},
// 		// {
// 		// 	return {
// 		// 		...state,
// 		// 		items: action.payload,
// 		// 	};
// 		// },
// 		[fetchContacts.pending]: state => ({ ...state, isLoading: true }),
// 		[fetchContacts.fulfilled]: state => ({ ...state, isLoading: false }),
// 		[fetchContacts.rejected]: state => ({ ...state, isLoading: false }),
// 		[fetchContacts.rejected]: (state, action) => ({
// 			...state,
// 			error: action.payload,
// 		}),
// 		[fetchContacts.pending]: state => ({ ...state, error: null }),
// 	},
// });

// export default contactSlice.reducer;
