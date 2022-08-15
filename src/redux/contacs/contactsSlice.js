import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
	reducerPath: 'contacts',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://62d6711f51e6e8f06f09a84f.mockapi.io/v1/',
	}),
	tagTypes: ['Contact'],
	endpoints: builder => ({
		getContacts: builder.query({
			query: () => `/contacts`,
			providesTags: ['Contact'],
		}),
		deleteContact: builder.mutation({
			query: contactId => ({
				url: `contacts/${contactId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Contact'],
		}),
		createContact: builder.mutation({
			query: ({ name, number }) => ({
				url: '/contacts',
				method: 'POST',
				body: {
					name,
					number,
				},
			}),
			invalidatesTags: ['Contact'],
		}),
	}),
});

export const {
	useGetContactsQuery,
	useDeleteContactMutation,
	useCreateContactMutation,
} = contactsApi;
