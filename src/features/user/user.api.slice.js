import { apiSlice } from "../../app/api/api.slice"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDetails: builder.query({
            query: () => ({
                url: 'profile',
                method: 'POST',
            }),
            providesTags: ['Details'],
        }),
        editDetails: builder.mutation({
            query: names => ({
                url: 'profile',
                method: 'PUT',
                body: { ...names }
            }),
            invalidatesTags: ['Details'],
        }),
    }),
})


export const { useGetDetailsQuery, useEditDetailsMutation } = userApiSlice