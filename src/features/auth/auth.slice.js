import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, details: null },
    reducers: {
        setCredentials: (state, action) => {
            const { token } = action.payload.body
            state.token = token
        },
        setDetails: (state, action) => {
            const { data } = action.payload.body
            state.details = data
        },
        logout: (state, action) => {
            state.token = null
            state.details = null
        }
    },
})

export const { setCredentials, setUserDetails, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token