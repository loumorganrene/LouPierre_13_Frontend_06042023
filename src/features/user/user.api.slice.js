import { apiSlice } from "../../app/api/api.slice"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDetails: builder.query({
            query: () => ({
                url: 'profile',
                method: 'POST'
            })
        }),
    }),
})


export const { useGetDetailsQuery } = userApiSlice