import { apiSlice } from "../../app/api/api.slice"

export const userApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: ['Details'] }).injectEndpoints({
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
            /** Optimistic Updates */
            onQueryStarted({ ...names }, { dispatch, queryFulfilled }) {
                const putResult = dispatch(
                    apiSlice.util.updateQueryData('editDetails', (draft) => {
                        Object.assign(draft, names)
                    })
                )
                queryFulfilled.catch(putResult.undo)
            }
        }),
    }),
})


export const { useGetDetailsQuery, useEditDetailsMutation } = userApiSlice