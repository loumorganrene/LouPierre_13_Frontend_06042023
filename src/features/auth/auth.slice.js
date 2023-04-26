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
            const { body } = action.payload
            state.details = body
        },
        logout: (state, action) => {
            state.token = null
        }
    },
})

export const { setCredentials, setUserDetails, logout } = authSlice.actions
export default authSlice.reducer
export const selectCurrentToken = (state) => state.auth.token