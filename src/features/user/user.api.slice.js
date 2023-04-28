import { apiSlice } from "../../app/api/api.slice"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDetails: builder.query({
            query: () => ({
                url: 'profile',
                method: 'POST',
                transformResponse: (response) => response.data,
                providesTags: ['Details'],
            })
        }),
        editDetails: builder.mutation({
            query: names => ({
                url: 'profile',
                method: 'PUT',
                body: { ...names }
            })
        }),
    }),
})


export const { useGetDetailsQuery, useEditDetailsMutation } = userApiSlice